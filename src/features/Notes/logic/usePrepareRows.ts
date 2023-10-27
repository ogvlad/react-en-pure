import { useRef } from "react"
import { useItemsContext } from "../context"

export const usePrepareRows = () => {
  
  const { state, api } = useItemsContext()
  
  const ref = useRef<HTMLDivElement>(null)
  
  state.itemsList.map((row, index) => {
    api.setRef(row.id, ref.current)
  })
}
