import { usePaginationContext } from "../context"

export const useActions = () => {
  
  const ctx = usePaginationContext()
  const { page } = ctx.state
  const { setPage, getPagesCount } = ctx.api
  
  const onClickPrev = () => {
    console.debug("onClickPrev")
    if (page <= 0) return
    setPage(page - 1)
  }

  const onClickNext = () => {
    console.debug("onClickNext")
    const totalPages = getPagesCount()
    if (page >= totalPages) return
    setPage(page + 1)
  }
  
  return {
    onClickPrev,
    onClickNext,
  }
}
