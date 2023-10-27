import { IState } from "../types/IState"
import { IApi } from "../types/IApi"

export function createOnDrop(props: any, state: IState, api: IApi) {
  return (item: any, monitor: any) => {
    console.debug("onDrop", item, props)
  

  }
}

