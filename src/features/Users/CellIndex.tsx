import { SampleList } from "../../shared/data/SampleList"
import { flattenCharacters } from "../../shared/data/flatten"
import { useMemo } from "react"

export const CellIndex = (params: any) => {
  
  const flatCharacters = useMemo(() => flattenCharacters(SampleList), [])
  const rowIndex = flatCharacters.findIndex(row => row.id === params.id)
  
  return (<div>{rowIndex}</div>)
}