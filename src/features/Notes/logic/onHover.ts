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
  
    const draggingRef = state.itemsRefMap[dragItem.id]

    // Determine rectangles
    const dragRect = draggingRef.current?.getBoundingClientRect()
    const hoverRect = hoverRef.current?.getBoundingClientRect()
    
    // Get vertical middle of hovered item
    const hoverBaselineY = (hoverRect.bottom - hoverRect.top) / 2
    // console.debug(`hoverBoundingRect.top: ${hoverRect.top}`)
    // console.debug(`hoverBoundingRect.bottom: ${hoverRect.bottom}`)
    // console.debug(`hoverBaselineY: ${hoverBaselineY}`)
    Baseline.show(hoverRect.top + hoverBaselineY)
    
    const height = dragRect.height
    // console.debug(draggingRef)
    // const draggingBoundingRect = draggingRef.current?.getBoundingClientRect()
    // const draggingOffset_ = draggingBoundingRect.bottom
    
    
    // Determine mouse position
    const draggingOffset = monitor.getClientOffset()
    console.debug(`draggingOffset: ${draggingOffset.y}`)
    
    // Get pixels to the top
    const hoverClientY = (draggingOffset as XYCoord).y - hoverRect.top
    
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverBaselineY) {
      return
    }
    
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverBaselineY) {
      return
    }
  
    const hoverTransformSign = dragIndex < hoverIndex ? -1 : 1
    api.setTransform(hoverItem.id, hoverTransformSign * height)
    
    // api.swap(dragIndex, hoverIndex)
    // Time to actually perform the action
    // moveCard(dragIndex, hoverIndex)
    
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    dragItem.index = hoverIndex
  }
}



