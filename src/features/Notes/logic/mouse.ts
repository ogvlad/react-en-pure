import { Direction } from "./geometry"

class Mouse {
  
  y: number
  direction: Direction
  
  constructor() {
    this.y = 0
    this.direction = Direction.Undefined
    document.ondragover  = this.onMouseMove
  }
  
  onMouseMove(e: any) {
    if (e.screenY === this.y) {
      this.direction = Direction.Undefined
      return
    }
    this.direction = e.screenY < this.y ? Direction.Up : Direction.Down
    this.y = e.screenY
    console.debug(this.direction)
  }
  
  reset() {
    this.y = 0
    this.direction = Direction.Undefined
  }
  getDirection(y: number) {
    
    if (y === this.y) return Direction.Undefined
    
    this.direction = y < this.y ? Direction.Up : Direction.Down
    this.y = y
    // console.debug(this.direction)
    return this.direction
  }
}

export const MouseMovement = new Mouse()
