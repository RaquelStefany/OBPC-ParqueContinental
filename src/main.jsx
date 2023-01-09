import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import ErrorPage from './pages/Error-Page'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
