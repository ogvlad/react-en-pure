import React, { createContext, PropsWithChildren, useContext, useState } from "react"
import { IContext } from "./types/IContext"
import { IState } from "./types/IState"

const TheContext = createContext({} as IContext)

export function ItemsProvider(props: any & PropsWithChildren<{}>) {
  
  const { children, items } = props

  const [state, setState] = useState<IState>({
    items,
    dragging: {
      id: null,
    }
  })
  
  const context: IContext = {
    state,
    api: {
      swap: (indexA: number, indexB: number) => {
        const newItems = swap_(state.items, indexA, indexB)
        setState((prev) => ({ ...prev, items: newItems }))
      },
      setDragging: (id: string | null) => {
        setState((prev) => ({ ...prev, dragging: { id } }))
      }
    }
  }
  
  return <TheContext.Provider value={context}>{children}</TheContext.Provider>
}

export const useItemsContext = () => useContext(TheContext)

function swap_<T>(arr: T[], indexA: number, indexB: number): T[] {
  const newArr = [...arr]
  const temp = newArr[indexA]
  newArr[indexA] = newArr[indexB]
  newArr[indexB] = temp
  return newArr
}
