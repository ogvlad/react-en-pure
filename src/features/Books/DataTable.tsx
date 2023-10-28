import {
  DragDropContext, DraggableLocation,
  DragStart,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult
} from "react-beautiful-dnd"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"
import { getColumns } from "../Notes/getColumns"
import { CustomRow } from "./CustomRow"
import { getRowClassName } from "../Notes/logic/getRowClassName"
import * as React from "react"
import { useState } from "react"
import { useItemsContext } from "../Notes/context"

export const DataTable = () => {
  
  const { state, api } = useItemsContext()
  
  const onDragStart = (start: DragStart) => {
    console.debug("onDragStart", start)
  }
  
  const onDragEnd = (result: DropResult) => {
    const destination: DraggableLocation = result.destination
    const source: DraggableLocation = result.source
    console.debug("onDragEnd", result)
    // api.swap(source.index, destination.index)
  }
  
  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId={"DataGridArea"}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <Box sx={{ height: 800, width: "100%" }} ref={provided.innerRef} {...provided.droppableProps} >
            <DataGrid
              rows={state.itemsList}
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
  )
}