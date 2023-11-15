import React from "react"
import { styled } from "@mui/material"
import { Pagination } from "./Pagination"

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "52px",
  borderTop: "1px solid rgb(224, 224, 224)"
})

const SelectedRowCount = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "0px 16px",
})

export const TableFooter = (props: any) => {
  console.debug(props)
  return (
    <Container className={"MuiDataGrid-footerContainer"}>
      <SelectedRowCount className={"MuiDataGrid-selectedRowCount"}>34 rows selected</SelectedRowCount>
      <Pagination />
    </Container>
  )
}
