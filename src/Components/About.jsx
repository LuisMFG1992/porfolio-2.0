import imagePlaceholderSquere from '../assets/imagePlaceholderSquere.png'

const About = () => {
  return (
    <section
      id="about"
      className="bg-bgDarker flex flex-col justify-center items-center gap-8 py-20 p-2 xs:px-10 md:px-20"
    >
      <h2 className="text-5xl font-bold text-center">
        About <span className="text-primary">Me</span>
      </h2>
      <div>
        <img
          src={imagePlaceholderSquere}
          alt="about me image"
          className="w-[150px] h-[150px] rounded-full border-[0.4rem] border-primary"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-7">
        <h3 className="text-center text-2xl font-bold">
          From Nuts and Bolts to Lines of Code
        </h3>
        <p className="text-center max-w-[80%]">
          A my journey from mechanical engineering to web development, a chance
          encounter with programming changed my perspective. After a solid
          career in engineering, I discovered how programming concepts could
          ingeniously solve everyday problems. This spark led me to study
          programming with passion, and now....
        </p>
      </div>
      <button
        type="button"
        className="transform active:scale-110 transition-all text-secunday bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
      >
        <a href="/">Read More</a>
      </button>
    </section>
  )
}

export default About
