import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { CustomRow } from "./CustomRow"
import { Root } from "../../shared/Root"
import { getData } from "./getData"
import { getColumns } from "./getColumns"

export const TheNotes = () => {
  return (
    <Root>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={getData()}
          columns={getColumns()}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{
            row: CustomRow,
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Root>
  );
}