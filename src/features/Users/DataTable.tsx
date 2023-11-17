import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

import { getColumns } from "./getColumns"
import { SampleList } from "../../shared/data/SampleList"
import { flattenCharacters } from "../../shared/data/flatten"
import { TableFooter } from "./Footer/TableFooter"
import { GetPagesCountFunc } from "./Footer/Pagination/types/GetPagesCountFunc"
import { TextDisplayedRowsFunc } from "./Footer/Pagination/types/TextDisplayedRowsFunc"

export const DataTable = () => {
  
  const flatCharacters = flattenCharacters(SampleList)
  const [state, setState] = React.useState(flatCharacters)
  
  const nonLinearPagesCount: GetPagesCountFunc = (args) => {
    const {totalRows, pageSize} = args
    return 10
  }
  const getTextDisplayedRows: TextDisplayedRowsFunc = (args) => {
    const {totalRows, pageSize} = args
    return "69-69 of 699"
  }
  
  const TheFooter = (props: any) => <TableFooter {...props} getPagesCount={nonLinearPagesCount} getTextDisplayedRows={getTextDisplayedRows}>Total score: 49</TableFooter>
  
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={state}
        columns={getColumns()}
        slots={{
          footer: TheFooter
        }}
        slotProps={{
          footer: {
            // @ts-ignore
            totalRows: state.length,
            options: [5, 10, 30, 50, 100],
            initialPageSize: 5
          }
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

