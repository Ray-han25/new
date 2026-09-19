import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './page/Home.jsx';
import Shop from './page/Shop.jsx';
const router=createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component:Home },
      { path: "/Shop", Component:Shop },         
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router} />,
  </StrictMode>,
)
