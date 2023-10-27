import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"
import { useDrop } from "react-dnd"

import { CustomRow } from "./CustomRow"
import { getData } from "./getData"
import { getColumns } from "./getColumns"
import { ItemTypes } from "./types/ItemTypes"
import { useState } from "react"
import { DustbinState } from "./types/DustbinState"
import { BoxState } from "./types/BoxState"

export const DataTable = () => {
  
  const [targets, setTargets] = useState<DustbinState[]>([
    { name: "Table", accepts: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet], lastDroppedItem: null },
    { name: "Section", accepts: [ItemTypes.SectionItem], lastDroppedItem: null },
    { name: "Sowiso", accepts: [ItemTypes.SowisoItem], lastDroppedItem: null },
  ])
  
  const [rows, setRows] = useState<BoxState[]>(getData())
  
  function swap<T>(arr: T[], indexA: number, indexB: number): T[] {
    const newArr = [...arr]
    const temp = newArr[indexA]
    newArr[indexA] = newArr[indexB]
    newArr[indexB] = temp
    return newArr
  }
  
  const handleSwap = (indexA: number, indexB: number) => {
    const newItems = swap(rows, indexA, indexB)
    setRows(newItems)
  }
  
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
        rows={rows}
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
        pageSizeOptions={[5, 10, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}