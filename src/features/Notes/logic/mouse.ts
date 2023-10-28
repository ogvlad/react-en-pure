import { Direction } from "./geometry"

class Mouse {
  
  y: number
  direction: Direction
  
  constructor() {
    this.y = 0
    this.direction = Direction.Down
    // document.ondragover  = this.onMouseMove
  }
  
  onMouseMove(e: any) {
    this.direction = e.screenY < this.y ? Direction.Up : Direction.Down
    this.y = e.screenY
    // console.debug(this.direction)
  }
  
  getDirection(y: number) {
    this.direction = y < this.y ? Direction.Up : Direction.Down
    this.y = y
    console.debug(this.direction)
    return this.direction
  }
}

export const MouseMovement = new Mouse()
