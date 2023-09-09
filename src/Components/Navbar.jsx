import { useState } from 'react'
import { useWindowResize } from '../hooks/useWindowResize'

import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [NavbarColor, setNavbarColor] = useState(false)
  const size = useWindowResize()
  const isMobile = size.width < 768 ? true : false

  const changeNavbarColor = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div
      className={`w-full  p-2 xs:px-10 md:px-20 fixed top-0 left-0 z-10  ${
        NavbarColor ? 'bg-bgDarker border-b-2 border-primary' : ''
      }`}
    >
      {isMobile === false && (
        <div className="flex justify-between items-center h-12">
          <h1 className="text-3xl font-semibold">LMFG</h1>
          <div className="flex gap-5 text-[1.2rem] font-semibold">
            <a href="#" className="text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Tecnologies
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex justify-between items-center h-12">
          <h1 className="text-3xl font-semibold">LMFG</h1>
          <GiHamburgerMenu size={'2rem'} />
        </div>
      )}
    </div>
  )
}

export default Navbar
