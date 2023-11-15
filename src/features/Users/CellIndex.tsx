import { SampleList } from "../../shared/data/SampleList"

export const CellIndex = (params: any) => {
  const rowIndex = SampleList.findIndex(row => row.id === params.id);
  return (<div>{rowIndex}</div>)
}