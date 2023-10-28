import { useDrag } from "react-dnd"
import { useItemsContext } from "../context"
import { Baseline } from "./baseline"
import { MouseMovement } from "./mouse"

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
        // MouseMovement.reset()
        // api.setTransform(row.id, 0)
        // api.resetTransform()
        return { ...row, index: props.index }
      },
      end: (draggedItem, monitor) => {
        // console.debug("onEnd", draggedItem, monitor)
        api.setDragging(null)
        Baseline.hide()
      },
    }),
    [],
  )
  
  return { useRef: dragRef, isDragging }
}

