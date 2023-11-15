import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

import { getColumns } from "./getColumns"
import { SampleList } from "../../shared/data/SampleList"
import { flattenCharacters } from "../../shared/data/flatten"

export const DataTable = () => {
  
  const flatCharacters = flattenCharacters(SampleList)
  const [state, setState] = React.useState(flatCharacters)
  
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={state}
        columns={getColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[5, 10, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}