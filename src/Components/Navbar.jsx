import { useEffect, useState } from 'react'
import { useWindowResize } from '../hooks/useWindowResize'

import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [NavbarColor, setNavbarColor] = useState(false)
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }

  const toggleHamburgerMenu = () => {
    setDisplayHamburgerMenu(!displayHamburgerMenu)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)

    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  const size = useWindowResize()
  const isMobile = size.width < 768 ? true : false

  return (
    <div
      className={`w-full  p-2 xs:px-10 md:px-20 fixed top-0 left-0 z-10  ${
        NavbarColor ? 'bg-bgDarker border-b-2 border-primary' : ''
      }`}
    >
      {/* Mobile */}
      {isMobile && (
        <div className="flex justify-between items-center h-12">
          <h1 className="text-3xl font-semibold">LMFG</h1>
          <div
            className="flex justify-between items-center h-12"
            onClick={toggleHamburgerMenu}
          >
            <div className="relative">
              <GiHamburgerMenu size={'1.5rem'} className="cursor-pointer" />
              {displayHamburgerMenu && (
                <div
                  className={`bg-red-900 min-w-[8rem] absolute top-12 right-0 flex flex-col items-center rounded-lg py-4 shadow-md font-semibold ${
                    NavbarColor ? 'dark:bg-bgDarker' : 'dark:bg-bgDark'
                  }`}
                >
                  <a href="#home" className="py-2 active:text-primary">
                    Home
                  </a>
                  <a href="#about" className="py-2 active:text-primary">
                    About
                  </a>
                  <a href="#projects" className="py-2 active:text-primary">
                    Projects
                  </a>
                  <a href="#contact" className="py-2 active:text-primary">
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop */}
      {isMobile === false && (
        <div className="flex justify-between items-center h-12">
          <h1 className="text-3xl font-semibold">LMFG</h1>
          <div className="flex gap-5 text-[1.2rem] font-semibold">
            <a href="#home" className=" hover:text-primary focus:text-primary">
              Home
            </a>
            <a href="#about" className="hover:text-primary focus:text-primary">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary focus:text-primary"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary focus:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
