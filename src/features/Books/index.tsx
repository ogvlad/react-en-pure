import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { CustomRow } from "./CustomRow"
import { Root } from "../../shared/Root"
import { getColumns } from "./getColumns"
import { getData } from "./getData"


export const TheBooks = () => {
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