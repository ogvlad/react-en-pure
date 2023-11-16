import { GetPagesCountFunc } from "../types/GetPagesCountFunc"
import { PageCounts } from "../types/PageCounts"
import { IPaginationProps } from "../types/IPaginationProps"

export const createGetPagesCountFunc = (props: IPaginationProps): GetPagesCountFunc => {
  
  const defaultFunc: GetPagesCountFunc = (pageSize: number, total: number, counts: PageCounts) => {
    return total / pageSize
  }
  
  return props.getPagesCount ?? defaultFunc
}
