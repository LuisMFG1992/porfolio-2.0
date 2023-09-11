// import BookTracker from '../assets/BookTracker.png'

const Cards = (project) => {
  const { name, image } = project
  return (
    <a
      href={`#${name}`}
      className="bg-bgDarker w-72 h-60 flex flex-col justify-start items-center rounded-lg relative border-[0.2rem] border-primary pointer-events-auto"
    >
      <img
        src={image}
        alt={`${name} cover`}
        className="rounded-lg p-1 h-48 object-fill"
      />
      <p className="pt-2">{name}</p>
    </a>
  )
}

export default Cards
