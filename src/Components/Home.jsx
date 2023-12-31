import { IoIosArrowDown } from 'react-icons/io'
import { CV_URL, socialMedia } from '../constants'

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen relative p-2 xs:px-10 md:px-15"
    >
      <div className="flex flex-col xs:items-start gap-5 max-w-[30rem] lg:max-w-[40rem] px-2">
        <h1 className="text-5xl md:text-6xl font-bold text-start">
          Hi, I'm <br className="lg:hidden" />
          <span className="text-primary">Luis Flores</span>
        </h1>
        <div>
          <h3 className="text-3xl text-white font-bold underline underline-offset-8 decoration-primary">
            Frontend Developer
          </h3>
        </div>
        <p className="text-start text-paragraphs">
          Always excited to embrace new challenges and constantly committed to
          learning. My goal is to turn ideas into realities by merging creative
          innovation with practicality.
        </p>
        <div className="flex gap-5">
          <button
            type="button"
            className="transform active:scale-110 transition-all duration-75 text-secondary bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-[0.2rem] dark:hover:ring-primary"
          >
            <a href={CV_URL} download="Luis Flores CV.pdf">
              Download CV
            </a>
          </button>
          {/* <button
            type=""
            className="transform active:scale-110 transition-all duration-75 text-secondary bg-primary hover:bg-primaryHover font-semibold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-bgDark border-[0.2rem] border-primary dark:hover:bg-primary dark:hover:text-white focus:outline-none"
          >
            Hire Me
          </button> */}

          <div className="absolute bottom-12 flex gap-8 xs:gap-5 left-4 xs:left-12">
            {socialMedia.map((element) => (
              <a
                key={element.name}
                href={element.link}
                target="_blank"
                type="button"
                className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none  font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:border-[0.2rem] dark:border-primary dark:text-secondary dark:hover:text-white  dark:hover:bg-primary"
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
