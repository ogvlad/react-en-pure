import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import {
  DragDropContext,
  DraggableLocation,
  DragStart,
  Droppable,
  DroppableProvided, DroppableStateSnapshot,
  DropResult,
  State
} from "react-beautiful-dnd"
import { CustomRow } from "./CustomRow"
import { Root } from "../../shared/Root"
import { useState } from "react"
import { getColumns } from "../Notes/getColumns"
import { getData } from "../Notes/getData"
import { getRowClassName } from "../Notes/logic/getRowClassName"

export const TheBooks = () => {
  
  const [state, setState] = useState({})
  
  const onDragStart = (start: DragStart) => {
    console.debug("onDragStart", start)
  }
  
  const onDragEnd = (result: DropResult) => {
    const destination: DraggableLocation = result.destination
    const source: DraggableLocation = result.source
    console.debug("onDragEnd", result)
  }
  
  return (
    <Root>
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId={"DataGridArea"}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <Box sx={{ height: 800, width: "100%" }} ref={provided.innerRef} {...provided.droppableProps} >
              <DataGrid
                rows={getData()}
                columns={getColumns()}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 50,
                    },
                  },
                }}
                slots={{
                  row: CustomRow,
                }}
                pageSizeOptions={[5, 50]}
                checkboxSelection
                disableRowSelectionOnClick
                getRowClassName={getRowClassName}
              />
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Root>
  )
}