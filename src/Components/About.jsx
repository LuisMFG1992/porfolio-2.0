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
          My story is a testament to how a simple conversation about palindromes
          can transform your life if you are willing to embrace new
          opportunities. So, if you ever find yourself at a similar crossroads,
          remember that change can be your best ally in the pursuit of your true
          passion. Life is too short not to follow your heart and dreams, even
          if it means leaving nuts and bolts behind!
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
