import React, { useEffect, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useDrag } from 'react-dnd'

export const CustomRow = (props: any) => {
  
  const { row } = props
  console.debug("CustomRow", row)
  
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: row.type,
      item: row,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 1 : 1,
      }),
    }),
    [],
  )
  
  return (
    <GridRow {...props} ref={drag} style={{ opacity }} />
  )
}
