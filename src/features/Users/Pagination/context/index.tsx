import React, { createContext, PropsWithChildren, useContext, useState } from "react"
import { IContext } from "../types/IContext"
import { PageCounts } from "../types/PageCounts"
import { IPaginationProps } from "../types/IPaginationProps"
import { createTextDisplayedRowsFunc } from "./createTextDisplayedRowsFunc"
import { createGetPagesCountFunc } from "./createGetPagesCountFunc"

const TheContext = createContext({} as IContext)

export function PaginationProvider(props: IPaginationProps & PropsWithChildren<{}>) {
  
  const { children } = props
  
  const { total, options, initialPageSize } = props
  
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [counts, setCounts] = useState(new PageCounts())
  
  const context: IContext = {
    props,
    state: {
      page,
      pageSize,
      totalPages,
      counts,
    },
    api: {
      setPage,
      setPageSize,
      setTotalPages,
      setCounts,
      getPagesCount: createGetPagesCountFunc(props),
      getTextDisplayedRows: createTextDisplayedRowsFunc(props),
    }
  }
  
  return <TheContext.Provider value={context}>{children}</TheContext.Provider>
}

export const usePaginationContext = () => useContext(TheContext)
