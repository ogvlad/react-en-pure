import { GetPagesCountFunc, IPaginationProps, PageCounts, TextDisplayedRowsFunc } from "../types"

export const useGetPagesCount = (props: IPaginationProps): GetPagesCountFunc => {

  const { getPagesCount } = props
  
  const defaultFunc: GetPagesCountFunc = (pageSize: number, total: number, counts: PageCounts) => {
    return total / pageSize
  }
  
  return getPagesCount ?? defaultFunc
}
