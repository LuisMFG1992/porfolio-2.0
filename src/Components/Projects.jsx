import Cards from './Cards'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-8 py-20 p-2 xs:px-10 md:px-20"
    >
      <h2 className="text-5xl font-bold">Projects</h2>
      <p className="text-center">
        The power to create is in your hands. Code that transforms ideas into
        reality.
      </p>
      <div className="flex flex-wrap gap-5 max-w-[50rem] justify-center items-center">
        <Cards />
        <Cards />
        <Cards />
        {/* <Cards />
        <Cards />
        <Cards /> */}
      </div>
      <button
        type="button"
        className="text-secunday bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
      >
        <a href="">Show more</a>
      </button>
    </section>
  )
}

export default Projects