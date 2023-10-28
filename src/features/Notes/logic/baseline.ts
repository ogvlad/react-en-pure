const show = (top: any) => {
  // Example: Change the line's position using JavaScript
  const line = document.getElementById("baseline")
  line.style.display = "block"
  line.style.position = "absolute"
  line.style.top = `${top}px` // Y-coordinate
}

const hide = () => {
  // Example: Change the line's position using JavaScript
  const line = document.getElementById('baseline');
  line.style.display = "none"
}

export const BaseLine = { show, hide }