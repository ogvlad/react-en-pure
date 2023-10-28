import { useDrag } from "react-dnd"
import { useItemsContext } from "../context"

export const useMyDrag = (props: any, ref: any) => {
  
  const { state, api } = useItemsContext()
  const { row, index } = props
  
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: row.type,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      item: () => {
        api.setDragging(row.id)
        return { ...row, index: props.index }
      },
      end: (draggedItem, monitor) => {
        console.debug("onEnd", draggedItem, monitor)
        api.setDragging(null)
      },
    }),
    [],
  )
  
  return { useRef: dragRef, isDragging }
}

const hideBaseline = () => {
  // Example: Change the line's position using JavaScript
  const line = document.getElementById('baseline');
  line.style.display = "none"
}
