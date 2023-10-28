import { IState } from "../types/IState"
import { IApi } from "../types/IApi"

export function createOnDrop(props: any, state: IState, api: IApi) {
  return (item: any, monitor: any) => {
    console.debug("onDrop", item, props)
  
    const dragIndex = item.index
    const hoverIndex = props.index
    console.debug("onDrop", dragIndex, hoverIndex)
  
    hideBaseline()
    // api.swap(dragIndex, hoverIndex)
    api.resetTransform()
  }
}

const hideBaseline = () => {
  // Example: Change the line's position using JavaScript
  const line = document.getElementById('baseline');
  line.style.display = "none"
}
