import * as React from "react"

import "./main.css"

import { TheNavigation } from "./TheNavigation"

export const Root = (props: React.PropsWithChildren) => {
  return (
    <div className={"container"}>
      <div className={"center-block"}>
      {props.children}
      </div>
      <div className={"top-block"}>
        <TheNavigation />
      </div>
    </div>
  )
}
