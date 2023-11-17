import React from "react"
import { styled } from "@mui/material"
import { useGridApiContext } from "@mui/x-data-grid"

import { Pagination } from "./Pagination"
import { PaginationProvider } from "./Pagination/context"

export const TableFooter = (props: any) => {
  
  const apiRef = useGridApiContext()
  const selectedRows = apiRef.current?.getSelectedRows()
  const selectedRowCount = selectedRows.size
  
  const { totalRows, options, initialPageSize, children } = props
  
  return (
    <Container className={"MuiDataGrid-footerContainer"}>
      
      <div className={"MuiDataGrid-selectedRowCount"}>{selectedRowCount} row(s) selected</div>
      <div>{children}</div>
      
      <PaginationProvider totalRows={totalRows} options={options} initialPageSize={initialPageSize}>
        <Pagination />
      </PaginationProvider>
    
    </Container>
  )
}

const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "200px 1fr auto",
  alignItems: "center",
  minHeight: "52px",
  borderTop: "1px solid rgb(224, 224, 224)",
  
  "> div:nth-child(1)": {
  },
  "> div:nth-child(2)": {
  },
  "> div:nth-child(3)": {
  },
  
  ".MuiDataGrid-selectedRowCount": {
    margin: "0px 16px",
  }
})
