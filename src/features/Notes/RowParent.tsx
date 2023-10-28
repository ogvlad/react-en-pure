import React, { useEffect, useRef } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useItemsContext } from "./context"
import { useMyDrag } from "./logic/useMyDrag"
import { useMyDrop } from "./logic/useMyDrop"

export const RowParent = (params: any) => {
  
  const { state, api } = useItemsContext()
  
  const { row, index } = params
  // console.debug("CustomRow", row)
  
  const ref = useRef<HTMLDivElement>(null)
  const drag = useMyDrag(params, ref)
  const drop = useMyDrop(params, ref)
  
  drag.useRef(drop.useRef(ref))
  
  useEffect(() => {
    api.setItem(row.id, row)
    api.setRef(row.id, ref)
  }, [])
  
  if (row.pid !== "") return null
  
  const opacity = drag.isDragging || state.dragging.id === row.pid ? 1 : 1
  const transform = state.itemsTransformMap[row.id]
  // console.debug("RowParent", state)
  
  // const transformValue = state.dragging.id ? transform : 0
  
  const getBorderColor = () => {
    if (!drop.isOver) return "transparent"
    if (drop.canDrop) return "green"
    return "red"
  }
  return (
    <div ref={ref}
         style={{
           opacity,
           transform: `translate3d(0, ${transform || 0}px, 0)`,
           transition: "transform 0.5s ease",
           border: `3px solid ${getBorderColor()}`
         }}>
      <GridRow {...params} />
      {state.itemsList.map((item, index) => {
        // console.debug(item)
        if (item.pid !== row.id) return null
        
        const childProps = {
          ...params,
          index,
          key: item.id,
          rowId: item.id,
        }
        return (<GridRow {...childProps} style={{ opacity }} />)
      })}
    </div>
  )
}
