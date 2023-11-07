import { technologies } from '../constants/technologies'

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-bgDarker flex flex-col justify-center items-center gap-8 py-20 p-2 xs:px-10 md:px-15"
    >
      <h2 className="text-5xl font-bold text-center">
        Skills<span className="text-primary">.</span>
      </h2>
      <div className="flex justify-center flex-wrap gap-5">
        {technologies.map((element) => (
          <div key={element.name} className="flex flex-col items-center gap-2">
            <img
              src={element.logo}
              alt={`${element.name}-logo`}
              className="w-[4rem] h-[4rem]"
            />
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
