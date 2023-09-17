// import BookTracker from '../assets/BookTracker.png'

const Cards = (project) => {
  const { name, image } = project
  return (
    <div className="max-w-[18rem] bg-white border-[0.2rem] border-gray-200 rounded-lg shadow dark:bg-bgDarker dark:border-primary">
      <a href="#">
        <img src={image} alt="" />
      </a>
      <div className="p-5 flex flex-col">
        <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </p>
        <p className="mb-3 text-paragraphs dark:text-paragraphs">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          type="button"
          className="transform active:scale-110 transition-all text-secunday bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
        >
          <a href="/">Read More</a>
        </button>
      </div>
    </div>
  )
}

export default Cards
