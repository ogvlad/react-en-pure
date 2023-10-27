export function createOnDrop(props: any, ref: any) {
  return (item: any, monitor: any) => {
    console.debug("onDrop", item, props)
    hideBaseline()
  }
}

const hideBaseline = () => {
  // Example: Change the line's position using JavaScript
  const line = document.getElementById('baseline');
  line.style.display = "none"
}
