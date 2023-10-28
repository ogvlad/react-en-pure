const getDistanceFromDraggingTop = (draggingRect: any, hoverRect: any) => {
  return Math.abs(hoverRect.top - draggingRect.top)
}

const getDistanceFromDraggingBottom = (draggingRect: any, hoverRect: any) => {
  return Math.abs(hoverRect.top - draggingRect.bottom)
}

const getDirection = (draggingRect: any, hoverRect: any) => {
  const dTop = getDistanceFromDraggingTop(draggingRect, hoverRect)
  const dBottom = getDistanceFromDraggingBottom(draggingRect, hoverRect)
  // console.debug("hoverRect", hoverRect)
  console.debug(`dTop: ${dTop} | dBottom: ${dBottom}`)
  return dTop < dBottom ? Direction.Up : Direction.Down
}

const shift = (el: any, direction: Direction, height: number) => {
  const transform = direction === Direction.Up ? height : -height
  el.style.transform = `translate3d(0, ${transform}px, 0)`
}

export const Geometry = {
  dTop: getDistanceFromDraggingTop,
  dBottom: getDistanceFromDraggingBottom,
  getDirection,
  shift,
}

export enum Direction {
  Undefined = "UNDEFINED",
  Up = "UP",
  Down = "DOWN",
}
