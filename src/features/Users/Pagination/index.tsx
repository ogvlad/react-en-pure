import React from "react"
import { PaginationRoot } from "./PaginationRoot"
import { RowsPerPage } from "./RowsPerPage"
import { Pages } from "./Pages"

export const Pagination = (props: any) => {
  console.debug(props)
  return (
    <PaginationRoot className={"MuiTablePagination-root Cirrus-pagination"}>
      <RowsPerPage />
      <Pages />
    </PaginationRoot>
  )
}
