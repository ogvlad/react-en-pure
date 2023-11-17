import { usePaginationContext } from "../context"

export const useActions = () => {
  
  const ctx = usePaginationContext()
  const { page } = ctx.state
  const { setPage, getPagesCount } = ctx.api
  
  const isPrevDisabled = page <= 0
  const isNextDisabled = page >= getPagesCount()
  
  const onClickPrev = () => {
    console.debug("onClickPrev", page)
    if (page <= 0) return
    setPage(page - 1)
  }

  const onClickNext = () => {
    console.debug("onClickNext", page)
    const totalPages = getPagesCount()
    if (page >= totalPages) return
    setPage(page + 1)
  }
  
  return {
    isPrevDisabled,
    isNextDisabled,
    onClickPrev,
    onClickNext,
  }
}
