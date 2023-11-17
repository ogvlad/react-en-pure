import React, { createContext, PropsWithChildren, useContext, useState } from "react"
import { IContext } from "../types/IContext"
import { PageCounts } from "../types/PageCounts"
import { IPaginationProps } from "../types/IPaginationProps"
import { createTextDisplayedRowsFunc } from "./createTextDisplayedRowsFunc"
import { createGetPagesCountFunc } from "./createGetPagesCountFunc"

const TheContext = createContext({} as IContext)

export function PaginationProvider(props: IPaginationProps & PropsWithChildren<{}>) {
  
  const { children } = props
  
  const { totalRows, initialPageSize } = props
  
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(initialPageSize)
  
  const getPagesCount_ = createGetPagesCountFunc(props)
  const getTextDisplayedRows_ = createTextDisplayedRowsFunc(props)
  
  const context: IContext = {
    props,
    state: {
      page,
      pageSize,
    },
    api: {
      setPage,
      setPageSize,
      
      getPagesCount: () => getPagesCount_({pageSize, totalRows}),
      getTextDisplayedRows: () => getTextDisplayedRows_({page, pageSize, totalRows}),
    }
  }
  
  return <TheContext.Provider value={context}>{children}</TheContext.Provider>
}

export const usePaginationContext = () => useContext(TheContext)
