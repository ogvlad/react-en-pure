import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Roboto font imports
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { HomePage } from "./features/HomePage"
import { TheTasks } from "./features/Tasks"
import { TheNotes } from "./features/Notes"
import { TheBooks } from "./features/Books"
import { TheUsers } from "./features/Users"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/books",
    element: <TheBooks />
  },
  {
    path: "/notes",
    element: <TheNotes />
  },
  {
    path: "/tasks",
    element: <TheTasks />
  },
  {
    path: "/users",
    element: <TheUsers />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
)
