import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <section className="flex items-center min-h-screen max-w-[55rem] relative">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-primary">Luis Flores</span>
        </h1>
        <div>
          <h3 className="text-3xl text-primary font-bold">
            Frontend Developer
          </h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ullam.
          Sunt tenetur quos, provident laborum molestiae odit sapiente?
          Excepturi, nam! Quam, minima blanditiis explicabo ea in quo cumque
          tenetur totam.
        </p>
        <div className="flex gap-5">
          <button
            type="button"
            className="text-secunday bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="text-secunday bg-primary hover:bg-primaryHover font-semibold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-bgDark border border-primary dark:hover:bg-primary dark:hover:text-white focus:outline-none"
          >
            Let's Talk
          </button>

          <div className="absolute bottom-12 flex gap-5">
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none  font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:border-primary dark:text-secunday dark:hover:text-bgDark  dark:hover:bg-primary"
            >
              <FaGithub />
            </button>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none  font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:border-primary dark:text-secunday dark:hover:text-bgDark  dark:hover:bg-primary"
            >
              <FaLinkedinIn />
            </button>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none  font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:border-primary dark:text-secunday dark:hover:text-bgDark  dark:hover:bg-primary"
            >
              <FaFacebookF />
            </button>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none  font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:border-primary dark:text-secunday dark:hover:text-bgDark  dark:hover:bg-primary"
            >
              <AiFillInstagram />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
