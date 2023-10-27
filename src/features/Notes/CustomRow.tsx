import React, { useEffect, useRef } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useItemsContext } from "./context"
import { useMyDrag } from "./logic/useMyDrag"
import { useMyDrop } from "./logic/useMyDrop"

export const CustomRow = (props: any) => {
  
  const { state, api } = useItemsContext()
  
  const { row, index } = props
  // console.debug("CustomRow", row)
  
  const ref = useRef<HTMLDivElement>(null)
  const drag = useMyDrag(props, ref)
  const drop = useMyDrop(props, ref)
  
  drag.useRef(drop.useRef(ref))
  
  useEffect(() => {
    api.setRef(row.id, ref)
  }, [])
  
  const opacity = drag.isDragging || state.dragging.id === row.pid ? 0.5 : 1
  
  return (
    <GridRow {...props} ref={ref} style={{ opacity }} />
  )
}
