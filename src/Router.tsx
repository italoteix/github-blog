import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'post/:id',
        element: <Post />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
