import { XYCoord } from "dnd-core"

export function createOnHover (props: any, ref: any) {
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
  }
}
