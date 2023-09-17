import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components'

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
