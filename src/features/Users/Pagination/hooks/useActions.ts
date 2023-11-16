import { usePaginationContext } from "../context"

export const useActions = () => {
  
  const ctx = usePaginationContext()
  const { page, totalPages } = ctx.state
  const { setPage } = ctx.api
  
  const onClickPrev = () => {
    if (page <= 0) return
    setPage(page - 1)
  }

  const onClickNext = () => {
    if (page >= totalPages) return
    setPage(page + 1)
  }
  
  return {
    page,
    setPage,
    onClickPrev,
    onClickNext,
  }
}
