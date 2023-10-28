import React, { createContext, PropsWithChildren, useContext, useState } from "react"
import { IContext } from "./types/IContext"
import { IState } from "./types/IState"
import { BoxState } from "./types/BoxState"

const TheContext = createContext({} as IContext)

export function ItemsProvider(props: any & PropsWithChildren<{}>) {
  
  const { children, items } = props

  const [state, setState] = useState<IState>({
    itemsList: items,
    itemsMap: {},
    itemsRefMap: {},
    itemsTransformMap: {},
    currentHoverIndex: null,
    dragging: {
      id: null,
    }
  })
  
  const context: IContext = {
    state,
    api: {
      swap: (indexA: number, indexB: number) => {
        const newItems = swap_(state.itemsList, indexA, indexB)
        setState((prev) => ({ ...prev, itemsList: newItems }))
      },
      swapCss: (params: any) => {
        // const newItems = swap_(state.itemsList, indexA, indexB)
        // setState((prev) => ({ ...prev, itemsList: newItems }))
      },
      setDragging: (id: string | null) => {
        setState((prev) => ({ ...prev, dragging: { id } }))
      },
      setCurrentHoverIndex: (index) => {
        setState((prev) => ({ ...prev, currentHoverIndex: index }))
      },
      setItem: (id: string, item: BoxState) => {
        setState((prev) => ({ ...prev, itemsMap: { ...prev.itemsMap, [id]: item} }))
      },
      setRef: (id: string, ref: any) => {
        setState((prev) => ({ ...prev, itemsRefMap: { ...prev.itemsRefMap, [id]: ref} }))
      },
      setTransform: (id: string, offset: any) => {
        const transformCurrent = state.itemsTransformMap[id] ?? 0
        setState((prev) => ({ ...prev, itemsTransformMap: { ...prev.itemsTransformMap, [id]: transformCurrent + offset} }))
      },
      resetTransform: () => {
        // const newMap = reset_(state.itemsTransformMap)
        setState((prev) => ({ ...prev, itemsTransformMap: { ...{}} }))
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
function reset_(obj: any) {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = 0;
    }
  }
  return obj;
}
