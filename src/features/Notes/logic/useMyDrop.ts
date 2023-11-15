import { useDrop } from "react-dnd"
import { Accepts } from "../types/Rules"
import { useItemsContext } from "../context"
import { DndTypes } from "../../../shared/data/DndTypes"

export const useMyDrop = (props: any, ref: any) => {
  
  const { state, api } = useItemsContext()
  const { row, index } = props

  const rules = Accepts[row.type as DndTypes]
  
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