const Modal = ({ ShowAboutMe }) => {
  return (
    <div
      className={`w-[80%] h-[75vh] rounded-lg absolute top-5 right-50 ${
        ShowAboutMe ? 'bg-red-900' : 'bg-blue-900'
      }`}
    ></div>
  )
}

export default Modal
