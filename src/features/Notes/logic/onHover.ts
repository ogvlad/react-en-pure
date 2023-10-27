import { XYCoord } from "dnd-core"
import { IApi } from "../types/IApi"
import { IState } from "../types/IState"

export function createOnHover(props: any, state: IState, api: IApi) {
  
  const ref = state.itemsRefMap[props.row.id]
  
  return (item: any, monitor: any) => {
    
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
    const hoverBaselineY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    console.debug(`hoverBoundingRect.top: ${hoverBoundingRect.top}`)
    console.debug(`hoverBoundingRect.bottom: ${hoverBoundingRect.bottom}`)
    console.debug(`hoverBaselineY: ${hoverBaselineY}`)
    showBaseline(hoverBoundingRect.top + hoverBaselineY)
    
    const draggingItem = monitor.getItem()
    // console.debug(draggingItem)
    
    // Determine container position and take it's bottom line as a pointer
    const draggingRef = state.itemsRefMap[draggingItem.id]
    // console.debug(draggingRef)
    // const draggingBoundingRect = draggingRef.current?.getBoundingClientRect()
    // const draggingOffset_ = draggingBoundingRect.bottom
    
    
    // Determine mouse position
    const draggingOffset = monitor.getClientOffset()
    console.debug(`draggingOffset: ${draggingOffset.y}`)
    
    // Get pixels to the top
    const hoverClientY = (draggingOffset as XYCoord).y - hoverBoundingRect.top
    
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverBaselineY) {
      return
    }
    
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverBaselineY) {
      return
    }
    
    api.swap(dragIndex, hoverIndex)
    // Time to actually perform the action
    // moveCard(dragIndex, hoverIndex)
    
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    item.index = hoverIndex
  }
}

const showBaseline = (top: any) => {
  // Example: Change the line's position using JavaScript
  const line = document.getElementById("baseline")
  line.style.display = "block"
  line.style.position = "absolute"
  line.style.top = `${top}px` // Y-coordinate
  line.style.left = "0" // X-coordinate
}

function debounce(func: any, wait: any) {
  let timeout: any
  return function (...args: any[]) {
    const context = this
    clearTimeout(timeout)  // Очищаем предыдущий таймер
    timeout = setTimeout(() => {
      func.apply(context, args)  // Вызываем функцию после задержки
    }, wait)
  }
}

function throttle(func: any, limit: any) {
  let inThrottle: any
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
