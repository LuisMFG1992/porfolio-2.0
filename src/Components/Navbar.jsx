import { useState } from 'react'

const Navbar = () => {
  const [NavbarColor, setNavbarColor] = useState(false)

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
      className={`w-full h-16 p-2 xs:px-10 md:px-20 flex justify-between items-center fixed top-0 left-0 z-10 ${
        NavbarColor ? 'bg-bgDarker' : ''
      }`}
    >
      <h1 className="text-3xl font-semibold">LMFG</h1>
      <div className="flex gap-5 text-[1.2rem] font-semibold">
        <a href="#" className="text-purple-500">
          Home
        </a>
        <a href="#" className="hover:text-purple-500">
          About
        </a>
        <a href="#" className="hover:text-purple-500">
          Tecnologies
        </a>
        <a href="#" className="hover:text-purple-500">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
