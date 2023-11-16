import React, { useState } from "react"
import { styled } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { RowsPerPage } from "./RowsPerPage"
import { useDisplayedRows } from "./hooks/useDisplayedRows"
import { usePaginationContext } from "./context"

export const Pagination = () => {
  
  const ctx = usePaginationContext()
  
  const getTextDisplayedRows = useDisplayedRows(props)
  

  const displayedRows = getTextDisplayedRows(page, pageSize, total, counts)

  return (
    <Container className={"MuiTablePagination-root Cirrus-pagination"}>
    
      <RowsPerPage />
    
      <div className={"MuiTablePagination-displayedRows"}>{displayedRows}</div>
    
      <div className={"MuiTablePagination-actions"}>
        <IconButton aria-label="Go to previous page" onClick={}>
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
