import html from '../assets/technologies/w3_html5-icon.svg'
import css from '../assets/technologies/w3_css-icon.svg'
import javascript from '../assets/technologies/logo-javascript.svg'
import sass from '../assets/technologies/sass-1.svg'
import bootstrap from '../assets/technologies/bootstrap-4.svg'
import tailwind from '../assets/technologies/tailwind-css-2.svg'
import chakra from '../assets/technologies/chakraUI.svg'
import figma from '../assets/technologies/figma-icon.svg'
import firebase from '../assets/technologies/firebase-icon.svg'
import git from '../assets/technologies/git-icon.svg'
import react from '../assets/technologies/react.svg'
import vite from '../assets/technologies/vite.svg'
import eslint from '../assets/technologies/eslint.svg'
import redux from '../assets/technologies/redux.svg'
import next from '../assets/technologies/next.svg'

const Skills = () => {
  const technologies = [
    {
      name: 'HTML',
      logo: html,
    },
    {
      name: 'CSS',
      logo: css,
    },
    {
      name: 'JavaScript',
      logo: javascript,
    },
    {
      name: 'React',
      logo: react,
    },
    {
      name: 'Redux',
      logo: redux,
    },
    {
      name: 'Eslint',
      logo: eslint,
    },
    {
      name: 'SASS',
      logo: sass,
    },
    {
      name: 'Bootstrap',
      logo: bootstrap,
    },
    {
      name: 'Tailwind',
      logo: tailwind,
    },
    {
      name: 'Chakra UI',
      logo: chakra,
    },
    {
      name: 'Figma',
      logo: figma,
    },
    {
      name: 'Firebase',
      logo: firebase,
    },
    {
      name: 'Git',
      logo: git,
    },
    {
      name: 'Vite',
      logo: vite,
    },

    {
      name: 'Next',
      logo: next,
    },
  ]

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
