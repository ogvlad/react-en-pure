import React, { useState } from "react"
import { styled } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { RowsPerPage } from "./RowsPerPage"
import { IPaginationProps, PageCounts } from "./types"
import { useDisplayedRows } from "./hooks/useDisplayedRows"
import { useGetPagesCount } from "./hooks/useGetPagesCount"

export const Pagination = (props: IPaginationProps) => {
  
  console.debug(props)
  
  const { total, options, initialPageSize } = props
  
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [counts, setCounts] = useState(new PageCounts())
  
  const getPagesCount = useGetPagesCount(props)
  const getTextDisplayedRows = useDisplayedRows(props)
  
  const onPageSizeChange = (event: any) => {
    setPageSize(event.target.value)
  }
  
  const pagesCount = getPagesCount(pageSize, total, counts)
  const displayedRows = getTextDisplayedRows(page, pageSize, total, counts)

  return (
    <Container className={"MuiTablePagination-root Cirrus-pagination"}>

      <RowsPerPage options={options} pageSize={pageSize} onChange={onPageSizeChange} />

      <div className={"MuiTablePagination-displayedRows"}>{displayedRows}</div>

      <div className={"MuiTablePagination-actions"}>
        <IconButton aria-label="Go to previous page">
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton aria-label="Go to next page">
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>

    </Container>
  )
}

export const Container = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  // fontSize: "1.4rem",
  
  "div, p": {
    fontFamily: "\"Open Sans Eas\", \"Open Sans\", sans-serif",
    // fontSize: "1.4rem",
  },
  "svg": {
    // fontSize: "2.4rem",
  },
  
  ".MuiToolbar-root": {
    // fontSize: "1.4rem",
  },
  
  ".MuiTablePagination-actions": {
    marginLeft: "20px",
    marginRight: "0",
  }
})
