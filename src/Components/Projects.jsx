import Cards from './Cards'

import BookTracker from '../assets/BookTracker.png'
import imagePlaceholderLandscape from '../assets/imagePlaceholderLandscape.png'

const projects = [
  {
    id: 1,
    name: 'Book Tracker',
    image: BookTracker,
  },
  {
    id: 2,
    name: 'Calculator',
    image: imagePlaceholderLandscape,
  },
  {
    id: 3,
    name: 'Cutter optimizer',
    image: imagePlaceholderLandscape,
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-8 py-20 p-2 xs:px-10 md:px-15"
    >
      <h2 className="text-5xl font-bold text-center">
        <span className="text-primary">My</span> Projects
      </h2>
      <p className="text-center font-semibold">
        The power to create is in your hands. Code that transforms ideas into
        reality.
      </p>
      <div className="flex flex-wrap gap-5 max-w-[70rem] justify-center items-center">
        {projects.map((element) => (
          <Cards key={element.id} name={element.name} image={element.image} />
        ))}
      </div>
      <button
        type="button"
        className="transform active:scale-110 transition-all text-secunday bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
      >
        <a href="/">Show more</a>
      </button>
    </section>
  )
}

export default Projects
