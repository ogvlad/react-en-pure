import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"
import { useDrop } from "react-dnd"

import { getColumns } from "./getColumns"
import { ItemTypes } from "./types/ItemTypes"
import { useItemsContext } from "./context"
import { RowParent } from "./RowParent"
import { getRowClassName } from "./logic/getRowClassName"

export const DataTable = () => {
  
  const { state, api } = useItemsContext()
  
  const onDrop = (item: any, monitor: any) => {
    console.debug("onDrop", item, monitor)
  }
  
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet],
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  

  return (
    <Box sx={{ height: 800, width: "100%" }}>
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
          row: RowParent,
        }}
        pageSizeOptions={[5, 10, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowClassName={getRowClassName}
      />
    </Box>
  )
}