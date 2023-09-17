import { createBrowserRouter } from 'react-router-dom'
import { AboutPage, ErrorPage, ProjectPage, Root } from '../pages'
import Home from '../pages/Home'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
    ],
  },
])
