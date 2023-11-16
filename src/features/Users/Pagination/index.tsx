import React from "react"
import { styled } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { PaginationRoot } from "./PaginationRoot"
import { RowsPerPage } from "./RowsPerPage"
import { Pages } from "./Pages"

export const Pagination = (props: any) => {
  console.debug(props)
  return (
    <PaginationRoot className={"MuiTablePagination-root Cirrus-pagination"}>
      <RowsPerPage options={[5, 10, 15, 30, 50, 100]} defaultPageSize={5} />
      <DisplayedRows className={"MuiTablePagination-displayedRows"}>1&ndash;50(89) of 65</DisplayedRows>
      <PaginationActions className={"MuiTablePagination-actions"}>
        <IconButton aria-label="Go to previous page">
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton aria-label="Go to next page">
          <KeyboardArrowRightIcon />
        </IconButton>
      </PaginationActions>
      <Pages />
    </PaginationRoot>
  )
}


const DisplayedRows = styled("p")({
  display: "flex",
  alignItems: "center",
})

const PaginationActions = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
  marginRight: "0",
})
