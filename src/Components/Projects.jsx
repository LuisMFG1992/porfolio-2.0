import { projects } from '../constants/projects.js'
import { Cards } from './index.js'
import { useState } from 'react'

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)

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
      <div className="flex flex-wrap gap-5 max-w-[800rem] justify-center items-center">
        {projects.map((project, idx) =>
          showAllProjects ? (
            <Cards
              key={project.name}
              name={project.name}
              image={project.image}
              url={project.url}
            />
          ) : (
            idx < 3 && (
              <Cards
                key={project.name}
                name={project.name}
                image={project.image}
                url={project.url}
              />
            )
          )
        )}
      </div>
      <button
        type="button"
        className="mt-8 transform active:scale-110 transition-all text-secondary bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
        onClick={() => {
          setShowAllProjects((prev) => !prev)
        }}
      >
        Show all projects
      </button>
    </section>
  )
}

export default Projects
