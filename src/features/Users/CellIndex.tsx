import { Characters } from "../../shared/data/characters"

export const CellIndex = (params: any) => {
  const rowIndex = Characters.findIndex(row => row.id === params.id);
  return (<div>{rowIndex}</div>)
}