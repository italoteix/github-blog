import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DefaultLayout } from './layouts/Default'
import { Home, loader as homeLoader } from './pages/Home'
import { Post } from './pages/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
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
