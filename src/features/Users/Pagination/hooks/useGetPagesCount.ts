import { GetPagesCountFunc } from "../types/GetPagesCountFunc"
import { PageCounts } from "../types/PageCounts"
import { usePaginationContext } from "../context"

export const useGetPagesCount = (): GetPagesCountFunc => {
  
  const ctx = usePaginationContext()
  
  const defaultFunc: GetPagesCountFunc = (pageSize: number, total: number, counts: PageCounts) => {
    return total / pageSize
  }
  
  return ctx.props.getPagesCount ?? defaultFunc
}
