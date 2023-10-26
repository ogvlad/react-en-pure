import React, { useEffect, useRef, useState } from "react"
import { GridRow } from "@mui/x-data-grid"
import type { Identifier, XYCoord } from 'dnd-core'
import { useDrag, useDrop } from "react-dnd"
import { Accepts } from "./types/Rules"

export const CustomRow = (props: any) => {
  
  const { row, index } = props
  // console.debug("CustomRow", row)
  
  const ref = useRef<HTMLDivElement>(null)
  
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: row.type,
      item: () => {
        return { ...row, index: props.index }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 1 : 1,
      }),
    }),
    [],
  )
  const onDrop = (item: any, monitor: any) => {
    console.debug("onDrop", item, monitor)
  }
  
  const rules = Accepts[row.type]
  
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: rules,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    hover(item: any, monitor) {
      // console.debug("hover", item, monitor)
      if (!ref.current) {
        return
      }
      console.debug("hover", item.index, props.index)
      const dragIndex = item.index
      const hoverIndex = props.index
      
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      
      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
      
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      
      // Time to actually perform the action
      // moveCard(dragIndex, hoverIndex)
      
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  
  dragRef(dropRef(ref))
  
  return (
    <GridRow {...props} ref={ref} style={{ opacity }} />
  )
}
