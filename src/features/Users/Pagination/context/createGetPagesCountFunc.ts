import { GetPagesCountFunc } from "../types/GetPagesCountFunc"
import { IPaginationProps } from "../types/IPaginationProps"

export const createGetPagesCountFunc = (props: IPaginationProps): GetPagesCountFunc => {
  
  const defaultFunc: GetPagesCountFunc = ({total, pageSize}) => {
    return total / pageSize
  }
  
  return props.getPagesCount ?? defaultFunc
}
