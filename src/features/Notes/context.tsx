import React, { createContext, PropsWithChildren, useContext, useState } from "react"
import { IContext } from "./types/IContext"
import { IState } from "./types/IState"

const TheContext = createContext({} as IContext)

export function ItemsProvider(props: any & PropsWithChildren<{}>) {
  
  const { children, formId, assessmentId, tableId } = props

  const [state, setState] = useState<IState>({
  })
  
  const context: IContext = {
    state,
    api: {
    
    }
  }
  
  return <TheContext.Provider value={context}>{children}</TheContext.Provider>
}

export const useItemsContext = () => useContext(TheContext)

