import { useDrop } from "react-dnd"
import { Accepts } from "../types/Rules"
import { createOnDrop } from "./onDrop"
import { createOnHover } from "./onHover"
import { useItemsContext } from "../context"
import { MouseMovement } from "./mouse"
import { Direction } from "./geometry"

export const useMyDrop = (props: any, ref: any) => {
  
  const { state, api } = useItemsContext()
  const { row, index } = props

  const rules = Accepts[row.type]
  
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: rules,
    drop: (item: any, monitor: any) => {
      api.swapByIds(item.id, props.row.id)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // canDrop: (item, monitor) => {
    //   return true
    // },
    hover: (dragItem: any, monitor: any) => {
      // console.debug("hover", dragItem)
      // api.setCurrentHoverIndex(index)
    },
  })
  
  return { useRef: dropRef, isOver, canDrop }
}