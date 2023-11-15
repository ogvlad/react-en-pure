import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

import { getColumns } from "./getColumns"
import { Characters } from "../../shared/data/characters"

export const DataTable = () => {
  
  const [state, setState] = React.useState(Characters)
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