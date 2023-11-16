import React from "react"
import { styled } from "@mui/material"
import { Pagination } from "./Pagination"
import { PaginationProvider } from "./Pagination/context"

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "52px",
  borderTop: "1px solid rgb(224, 224, 224)",
  
  ".MuiDataGrid-selectedRowCount": {
    margin: "0px 16px",
  }
})

export const TableFooter = (props: any) => {
  console.debug(props)
  
  const { total, options, initialPageSize } = props
  
  return (
    <Container className={"MuiDataGrid-footerContainer"}>
      
      <div className={"MuiDataGrid-selectedRowCount"}>34 rows selected</div>
      
      <PaginationProvider  total={total} options={options} initialPageSize={initialPageSize}>
        <Pagination />
      </PaginationProvider>
      
    </Container>
  )
}
