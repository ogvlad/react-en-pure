const show = (el: any) => {
  el.style.border = "3px solid red"
}
const reset = (el: any) => {
  el.style.border = ""
}

export const Highlight = {
  show,
  reset,
}