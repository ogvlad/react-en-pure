export function createOnDrop(props: any, ref: any) {
  return (item: any, monitor: any) => {
    console.debug("onDrop", item, props)
  }
}