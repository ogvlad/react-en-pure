import React from "react"
import { styled } from "@mui/material"
import { GridRenderEditCellParams, useGridApiContext } from "@mui/x-data-grid"

import { Pagination } from "./Pagination"
import { PaginationProvider } from "./Pagination/context"

export const TableFooter = (props: any) => {
  // console.debug(props)
  
  const apiRef = useGridApiContext()
  const selectedRows = apiRef.current?.getSelectedRows()
  const selectedRowCount = selectedRows.size
  
  console.debug(selectedRows)
  console.debug(selectedRowCount)

  const { totalRows, options, initialPageSize } = props
  
  return (
    <Container className={"MuiDataGrid-footerContainer"}>
      
      <div className={"MuiDataGrid-selectedRowCount"}>{selectedRowCount} row(s) selected</div>
      
      <PaginationProvider totalRows={totalRows} options={options} initialPageSize={initialPageSize}>
        <Pagination />
      </PaginationProvider>
    
    </Container>
  )
}

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
