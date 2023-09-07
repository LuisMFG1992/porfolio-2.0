const Navbar = () => {
  return (
    <div className="w-full h-20 px-20 pt- flex justify-between items-center fixed top-0 left-0">
      <h1 className="text-3xl font-semibold">LMFG</h1>
      <div className="flex gap-5 text-[1.2rem] font-semibold">
        <a href="#" className="text-purple-500">
          Home
        </a>
        <a href="#" className="hover:text-purple-500">
          About
        </a>
        <a href="#" className="hover:text-purple-500">
          Tecnologies
        </a>
        <a href="#" className="hover:text-purple-500">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
