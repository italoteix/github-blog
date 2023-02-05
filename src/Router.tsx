import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
