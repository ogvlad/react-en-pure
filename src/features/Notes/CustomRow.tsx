import React, { useEffect, useRef, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useDrag, useDrop } from "react-dnd"
import { Accepts } from "./types/Rules"
import { createOnHover } from "./logic/onHover"
import { createOnDrop } from "./logic/onDrop"
import { useItemsContext } from "./context"

export const CustomRow = (props: any) => {
  
  const { state, api } = useItemsContext()
  
  const { row, index } = props
  // console.debug("CustomRow", row)
  
  const ref = useRef<HTMLDivElement>(null)
  
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: row.type,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      item: () => {
        api.setDragging(row.id);
        return { ...row, index: props.index }
      },
      end: () => {
        api.setDragging(null);
      },
    }),
    [],
  )

  const rules = Accepts[row.type]
  
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: rules,
    drop: createOnDrop(props, ref),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    hover: createOnHover(props, ref, api),
  })
  
  dragRef(dropRef(ref))
  
  const opacity = isDragging || state.dragging.id === row.pid ? 0.5 : 1
  
  return (
    <GridRow {...props} ref={ref} style={{ opacity }} />
  )
}
