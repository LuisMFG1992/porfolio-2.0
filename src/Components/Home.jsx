const Home = () => {
  return (
    <section className="flex items-center min-h-screen max-w-[45rem]">
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
            className="text-white bg-primary hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="text-white bg-primary hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none"
          >
            Let's Talk
          </button>
          <button></button>
        </div>
      </div>
    </section>
  )
}

export default Home
