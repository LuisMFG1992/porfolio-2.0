import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

const socialMedia = [
  {
    name: 'Github',
    icon: <FaGithub />,
    link: 'https://github.com/LuisMFG1992?tab=repositories',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/luismfgdev/',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/luismiguel.floresgranadillo',
  },
  {
    name: 'Instagram',
    icon: <AiFillInstagram />,
    link: 'https://www.instagram.com/luis.mfg/',
  },
]

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen relative p-2 xs:px-10 md:px-20"
    >
      <div className="flex flex-col items-center xs:items-start gap-5 max-w-[30rem] lg:max-w-[40rem]">
        <h1 className="text-6xl font-bold text-center xs:text-start">
          Hi, I'm <br className="lg:hidden" />
          <span className="text-primary">Luis Flores</span>
        </h1>
        <div>
          <h3 className="text-3xl text-white font-bold underline underline-offset-8 decoration-primary">
            Frontend Developer
          </h3>
        </div>
        <p className="text-center xs:text-start">
          Always excited to embrace new challenges, constantly committed to
          learning, My goal is to turn ideas into realities by merging creative
          innovation with practicality.
        </p>
        <div className="flex gap-5">
          <button
            type="button"
            className="transform active:scale-110 transition-all duration-75 text-secunday bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="transform active:scale-110 transition-all duration-75 text-secunday bg-primary hover:bg-primaryHover font-semibold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-bgDark border border-primary dark:hover:bg-primary dark:hover:text-white focus:outline-none"
          >
            Let's Talk
          </button>

          <div className="absolute bottom-12 flex gap-8 xs:gap-5">
            {socialMedia.map((element) => (
              <a
                key={element.name}
                href={element.link}
                target="_blank"
                type="button"
                className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none  font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:border-primary dark:text-secunday dark:hover:text-white  dark:hover:bg-primary"
                rel="noreferrer"
              >
                {element.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <IoIosArrowDown
        size={'4rem'}
        className="absolute bottom-8 left-[48%] animate-bounce hidden sm:block"
      />
    </section>
  )
}

export default Home
