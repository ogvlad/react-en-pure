import { GetPagesCountFunc } from "../types/GetPagesCountFunc"
import { IPaginationProps } from "../types/IPaginationProps"

export const createGetPagesCountFunc = (props: IPaginationProps): GetPagesCountFunc => {
  
  const defaultFunc: GetPagesCountFunc = ({totalRows, pageSize}) => {
    return totalRows / pageSize
  }
  
  return props.getPagesCount ?? defaultFunc
}
