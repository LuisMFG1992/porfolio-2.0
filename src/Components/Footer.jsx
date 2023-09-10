import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 text-center relative ">
      © 2023. All Rights Reserved.
      <a
        href="#home"
        className="absolute bottom-[-2px] right-5 bg-white rounded-lg"
      >
        <BsFillArrowUpSquareFill size={'1.8rem'} className=" text-primary" />
      </a>
    </footer>
  )
}

export default Footer
