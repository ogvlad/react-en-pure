import * as React from 'react';
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Root } from "../../shared/Root"
import { DataTable } from "./DataTable"
import { ItemsProvider } from "./context"
import { getData } from "./getData"

export const TheNotes = () => {
  
  return (
    <Root>
      <DndProvider backend={HTML5Backend}>
        <ItemsProvider items={getData()}>
          <DataTable />
          <div id="baseline"></div>
        </ItemsProvider>
      </DndProvider>
    </Root>
  );
}