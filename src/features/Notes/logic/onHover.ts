import { XYCoord } from "dnd-core"
import { IApi } from "../types/IApi"
import { IState } from "../types/IState"
import { Baseline } from "./baseline"

export function createOnHover(props: any, state: IState, api: IApi) {
  
  const hoverItem = state.itemsMap[props.row.id]
  const hoverRef = state.itemsRefMap[props.row.id]
  
  return (dragItem: any, monitor: any) => {
    
    console.debug("hover")
    console.debug(dragItem, hoverItem)
  
    if (!hoverRef.current) {
      return
    }
    
    const dragIndex = dragItem.index
    const hoverIndex = props.index
    console.debug(dragIndex, hoverIndex)

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }
    
    return
  
    const dragRef = state.itemsRefMap[dragItem.id]

    // Determine rectangles
    const dragRect = dragRef.current?.getBoundingClientRect()
    const hoverRect = hoverRef.current?.getBoundingClientRect()
  
    const height = dragRect.height
    
    // Dragging downwards
    if (dragIndex < hoverIndex) {
      const margin = hoverRect.top - dragRect.bottom
      if (margin < 5) return
  
      api.setTransform(hoverItem.id, -height)
      return
    }
    
    // Dragging upwards
    if (dragIndex > hoverIndex) {
      const margin = dragRect.top - hoverRect.bottom
      if (margin < 5) return
      
      api.setTransform(hoverItem.id, height)
      return
    }
  
    // dragItem.index = hoverIndex
  }
}



