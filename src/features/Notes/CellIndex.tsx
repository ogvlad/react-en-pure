import { useItemsContext } from "./context"

export const CellIndex = (params: any) => {
  
  const { state, api } = useItemsContext()
  const rowIndex = state.itemsList.findIndex(row => row.id === params.id);
  return (<div>{rowIndex}</div>)
}