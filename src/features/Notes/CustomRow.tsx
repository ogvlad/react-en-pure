import React, { useEffect, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useDrag, useDrop } from "react-dnd"
import { Accepts } from "./types/Rules"

export const CustomRow = (props: any) => {
  
  const { row } = props
  // console.debug("CustomRow", row)
  
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: row.type,
      item: row,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 1 : 1,
      }),
    }),
    [],
  )
  const onDrop = (item: any) => {
    console.debug(item)
  }
  
  const rules = Accepts[row.type]
  
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: rules,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  
  // Use the same ref for both drag and drop
  const combinedRef = (node: any) => {
    dragRef(node);
    dropRef(node);
  };
  
  return (
    <GridRow {...props} ref={combinedRef} style={{ opacity }} />
  )
}
