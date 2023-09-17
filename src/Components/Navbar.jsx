import { useEffect, useState } from 'react'
import { useWindowResize } from '../hooks/useWindowResize'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [NavbarColor, setNavbarColor] = useState(false)
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

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
    changeNavbarColor()
    window.addEventListener('scroll', changeNavbarColor)

    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  const links = [
    { text: 'Home', url: '#home' },
    { text: 'About', url: '#about' },
    { text: 'Experience', url: '#experience' },
    { text: 'Skills', url: '#skills' },
    { text: 'Projects', url: '#projects' },
    { text: 'Contact', url: '#contact' },
  ]

  const size = useWindowResize()
  const isMobile = size.width < 768 ? true : false

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section')

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 125
      const sectionBottom = sectionTop + section.clientHeight
      const scrollPosition = window.scrollY

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.getAttribute('id')
        setActiveLink(`#${sectionId}`)
      }
    })
  })

  return (
    <div
      className={`w-full  py-2 px-4 xs:px-10 md:px-15 fixed top-0 left-0 z-10  ${
        NavbarColor ? 'bg-bgDarker border-b-[0.2rem] border-primary' : ''
      }`}
    >
      {/* Mobile */}

      <div className="flex justify-between items-center h-12">
        <h1 className="text-3xl font-semibold flex justify-center items-center">
          LMFG
          <span className="text-primary text-5xl pb-1">.</span>
        </h1>

        {/* Mobile */}
        {isMobile && (
          <div
            className="flex justify-between items-center h-12"
            onClick={toggleHamburgerMenu}
          >
            <div className="relative">
              <GiHamburgerMenu size={'1.5rem'} className="cursor-pointer" />
              {displayHamburgerMenu && (
                <div
                  className={`min-w-[8rem] absolute top-11 right-0 flex flex-col items-center rounded-lg py-4 shadow-md font-semibold border-[0.2rem] border-primary  ${
                    NavbarColor ? 'dark:bg-bgDarker' : 'dark:bg-bgDark'
                  }`}
                >
                  {links.map((link) => (
                    <a
                      key={link.text}
                      href={link.url}
                      className={`py-2 ${
                        activeLink === link.url ? 'text-primary' : 'text-white'
                      }`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop */}
        {!isMobile && (
          <div className="flex gap-5 text-[1.1rem] font-semibold">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`hover:scale-125 transition-all ease-in ${
                  activeLink === link.url ? 'text-primary' : 'text-white'
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
