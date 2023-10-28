import { IApi } from "../types/IApi"
import { IState } from "../types/IState"
import { Direction, Geometry } from "./geometry"
import { MouseMovement } from "./mouse"

export function createOnHover(props: any, state: IState, api: IApi) {
  
  const hoverId = props.row.id
  const hoverItem = state.itemsMap[hoverId]
  const hoverRef = state.itemsRefMap[hoverId]
  
  return (dragItem: any, monitor: any) => {
    
    // console.debug("hover")
    // console.debug(dragItem, hoverItem)
    
    if (!hoverRef.current) {
      return
    }
    
    const dragIndex = dragItem.index
    const hoverIndex = props.index
    // console.debug(dragIndex, hoverIndex)
    
    const draggingOffset = monitor.getClientOffset()
    // console.debug(`draggingOffset: [${draggingOffset.x}:${draggingOffset.y}]`)
    
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
    // console.debug(`direction: ${direction}`)
    
    const getOffset = () => {
      if (direction === Direction.Undefined) return 0
      if (direction === Direction.Up) Number(height)
      return Number(-height)
    }
    
    // const offset = getOffset()
    
    // console.debug(`height: ${height}`)
    // console.debug(`offset: ${offset}`)
    // Geometry.shift(hoverRef.current, direction, height)
    // api.setTransform(hoverId, offset)
    
    if (direction === Direction.Undefined) return
    // api.swap(dragIndex, hoverIndex)
    api.setCurrentHoverIndex(hoverIndex)
    // dragItem.index = hoverIndex
  }
}
