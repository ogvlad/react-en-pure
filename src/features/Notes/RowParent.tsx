import React, { useEffect, useRef } from "react"
import { GridRow } from "@mui/x-data-grid"
import { useItemsContext } from "./context"
import { useMyDrag } from "./logic/useMyDrag"
import { useMyDrop } from "./logic/useMyDrop"

export const RowParent = (props: any) => {
  
  const { state, api } = useItemsContext()
  
  const { row, index } = props
  // console.debug("CustomRow", row)
  
  const ref = useRef<HTMLDivElement>(null)
  const drag = useMyDrag(props, ref)
  const drop = useMyDrop(props, ref)
  
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
  
  return (
    <div ref={ref} style={{
      opacity,
      transform: `translate3d(0, ${transform || 0}px, 0)`,
      transition: 'transform 0.5s ease',
      border: `1px solid ${drop.isOver ? 'red' : 'transparent'}`
    }}>
      <GridRow {...props}  />
      {/*{state.itemsList.map((item, index) => {*/}
      {/*  // console.debug(item)*/}
      {/*  if (item.pid !== row.id) return null*/}
      {/*  */}
      {/*  const childProps = {*/}
      {/*    ...props,*/}
      {/*    index,*/}
      {/*    key: item.id,*/}
      {/*    rowId: item.id,*/}
      {/*  }*/}
      {/*  return (<GridRow {...childProps} style={{ opacity }} />)*/}
      {/*})}*/}
    </div>
  )
}
