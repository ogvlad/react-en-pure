import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { CustomRow } from "./CustomRow"
import { Root } from "../../shared/Root"
import { getData } from "./getData"
import { getColumns } from "./getColumns"
import { ItemTypes } from "./types/ItemTypes"
import { useState } from "react"
import { DustbinState } from "./types/DustbinState"
import { BoxState } from "./types/BoxState"

export const TheNotes = () => {
  
  const [targets, setTargets] = useState<DustbinState[]>([
    { name: "Table", accepts: [ItemTypes.Item, ItemTypes.Section, ItemTypes.SowisoSet], lastDroppedItem: null },
    { name: "Section", accepts: [ItemTypes.SectionItem], lastDroppedItem: null },
    { name: "Sowiso", accepts: [ItemTypes.SowisoItem], lastDroppedItem: null },
  ])
  
  const [rows] = useState<BoxState[]>(getData())
  
  return (
    <Root>
      <DndProvider backend={HTML5Backend}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
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
      </DndProvider>
    </Root>
  );
}