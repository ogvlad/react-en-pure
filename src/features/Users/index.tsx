import * as React from "react"
import { Root } from "../../shared/Root"
import { ItemsProvider } from "../Notes/context"
import { getData } from "../Notes/getData"
import { DataTable } from "./DataTable"

export const TheUsers = () => {
  return (
    <Root>
      <ItemsProvider items={getData()}>
        <DataTable />
      </ItemsProvider>
    </Root>
  )
}
