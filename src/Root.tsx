import * as React from "react"

import "./main.css"

export const Root = (props: React.PropsWithChildren) => {
  return (
    <div className={"container"}>
      <div className={"center-block"}>
      {props.children}
      </div>
    </div>
  )
}
