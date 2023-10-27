import * as React from "react"
import { Root } from "../../shared/Root"
import { getData } from "../Notes/getData"
import { ItemsProvider } from "../Notes/context"
import { DataTable } from "./DataTable"

export const TheBooks = () => {

  return (
    <Root>
      <ItemsProvider items={getData()}>
        <DataTable />
      </ItemsProvider>
    </Root>
  )
}