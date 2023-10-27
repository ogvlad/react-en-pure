import { useDrop } from "react-dnd"
import { Accepts } from "../types/Rules"
import { createOnDrop } from "./onDrop"
import { createOnHover } from "./onHover"
import { useItemsContext } from "../context"

export const useMyDrop = (props: any, ref: any) => {
  
  const { state, api } = useItemsContext()
  const { row, index } = props

  const rules = Accepts[row.type]
  
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: rules,
    drop: createOnDrop(props, state, api),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    hover: createOnHover(props, state, api),
  })
  
  return { useRef: dropRef, isOver, canDrop }
}