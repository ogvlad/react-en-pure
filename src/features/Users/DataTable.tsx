import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

import { getColumns } from "./getColumns"
import { SampleList } from "../../shared/data/SampleList"
import { flattenCharacters } from "../../shared/data/flatten"
import { TableFooter } from "./TableFooter"

export const DataTable = () => {
  
  const flatCharacters = flattenCharacters(SampleList)
  const [state, setState] = React.useState(flatCharacters)
  
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={state}
        columns={getColumns()}
        slots={{
          footer: TableFooter
        }}
        slotProps={{
          footer: {
            // @ts-ignore
            total: state.length,
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