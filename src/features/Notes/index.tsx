import * as React from 'react';
import { DndProvider, useDrop } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Root } from "../../shared/Root"
import { DataTable } from "./DataTable"
import { ItemsProvider } from "./context"

export const TheNotes = () => {
  
  return (
    <Root>
      <DndProvider backend={HTML5Backend}>
        <ItemsProvider>
          <DataTable />
        </ItemsProvider>
      </DndProvider>
    </Root>
  );
}