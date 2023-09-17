import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export const Root = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}