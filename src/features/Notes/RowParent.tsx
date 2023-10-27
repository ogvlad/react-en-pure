import React, { useEffect, useRef } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useItemsContext } from "./context"
import { useMyDrag } from "./logic/useMyDrag"
import { useMyDrop } from "./logic/useMyDrop"
import { RowChild } from "./RowChild"

export const RowParent = (props: any) => {
  
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
  
  if (row.pid !== "") return null
  
  const opacity = drag.isDragging || state.dragging.id === row.pid ? 0.5 : 1
  
  return (
    <div ref={ref} style={{ opacity }}>
      <GridRow {...props}  />
      {state.itemsList.map((item, index) => {
        // console.debug(item)
        if (item.pid !== row.id) return null
        
        const childProps = {
          ...props,
          index,
          key: item.id,
          rowId: item.id,
        }
        return (<GridRow {...childProps} style={{ opacity }} />)
      })}
    </div>
  )
}
