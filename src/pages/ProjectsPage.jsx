import { useNavigation } from 'react-router-dom'

const ProjectsPage = () => {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <h1> Loading... </h1>
  }

  return <>ProjectsPage</>
}

export default ProjectsPage
