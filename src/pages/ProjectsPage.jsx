import { useEffect } from 'react'
import { Cards } from '../Components'
import imagePlaceholderLandscape from '../assets/imagePlaceholderLandscape.png'

const projects = [
  {
    name: 'Project 1',
    image: imagePlaceholderLandscape,
  },
  {
    name: 'Project 2',
    image: imagePlaceholderLandscape,
  },
  {
    name: 'Project 3',
    image: imagePlaceholderLandscape,
  },
  {
    name: 'Project 4',
    image: imagePlaceholderLandscape,
  },
  {
    name: 'Project 5',
    image: imagePlaceholderLandscape,
  },
  {
    name: 'Project 6',
    image: imagePlaceholderLandscape,
  },
]

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-8 pt-32 pb-20 p-2 xs:px-10 md:px-15"
    >
      <h2 className="text-5xl font-bold text-center">
        <span className="text-primary">My</span> Projects
      </h2>
      <p className="text-center font-semibold">
        The power to create is in your hands. Code that transforms ideas into
        reality.
      </p>
      <div className="flex flex-wrap gap-5 max-w-[800rem] justify-center items-center">
        {projects.map((element) => (
          <Cards key={element.name} name={element.name} image={element.image} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
