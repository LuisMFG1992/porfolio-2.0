import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <section
      id="home"
      className="flex items-center min-h-screen justify-center p-2 xs:px-10 md:px-15"
    >
      <div>
        <p className="text-4xl">Oops!</p>
        <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </section>
  )
}

export default ErrorPage
