import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/routes'

import './index.css'
import { MyContextProvider } from './Context/themeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </MyContextProvider>
)
