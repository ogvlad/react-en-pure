import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Roboto font imports
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { HomePage } from "./features/HomePage"
import { Root } from "./Root"
import { TheTasks } from "./features/Tasks"

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />
  // },
  {
    path: "/",
    element: <TheTasks />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
