import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { Home } from './routes/Home'
import { Pagina404 } from './routes/Pagina404'
import { ThankYou } from './routes/ThankYou'
import { Automation } from './routes/Automation'
// import { Than } from './routes/Projetos/Topolinos'


//react-router-dom
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    // path: "/",
    errorElement: <Pagina404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/thankyou',
        element: <ThankYou />
    },
    {
      path: '/automation',
      element: <Automation />
  },
  {
    path: '/automacao',
    element: <Automation />
}]
  }
])
//react-router-dom

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
