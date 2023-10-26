import * as React from 'react';
import { DndProvider, useDrop } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Root } from "../../shared/Root"
import { DataTable } from "./DataTable"

export const TheNotes = () => {
  
  return (
    <Root>
      <DndProvider backend={HTML5Backend}>
        <DataTable />
      </DndProvider>
    </Root>
  );
}