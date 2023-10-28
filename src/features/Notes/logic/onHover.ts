import { IApi } from "../types/IApi"
import { IState } from "../types/IState"
import { Direction, Geometry } from "./geometry"
import { MouseMovement } from "./mouse"

export function createOnHover(props: any, state: IState, api: IApi) {
  
  const hoverItem = state.itemsMap[props.row.id]
  const hoverRef = state.itemsRefMap[props.row.id]
  
  return (dragItem: any, monitor: any) => {
    
    console.debug("hover")
    // console.debug(dragItem, hoverItem)
  
    if (!hoverRef.current) {
      return
    }
    
    const dragIndex = dragItem.index
    const hoverIndex = props.index
    // console.debug(dragIndex, hoverIndex)
  
    const draggingOffset = monitor.getClientOffset()
    console.debug(`draggingOffset: [${draggingOffset.x}:${draggingOffset.y}]`)

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }
    
    // return
  
    const dragRef = state.itemsRefMap[dragItem.id]

    // Determine rectangles
    const dragRect = dragRef.current?.getBoundingClientRect()
    const hoverRect = hoverRef.current?.getBoundingClientRect()
  
    const height = dragRect.height
  
    const direction = MouseMovement.getDirection(draggingOffset.y)
    console.debug(`direction: ${direction}`)
  
    Geometry.shift(hoverRef.current, direction, height)
   
  
    // dragItem.index = hoverIndex
  }
}



