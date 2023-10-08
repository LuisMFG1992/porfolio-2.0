import imagePlaceholderSquare from '../assets/imagePlaceholderSquare.png'
import { useState } from 'react'

const About = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <section
      id="about"
      className="bg-bgDarker flex flex-col justify-center items-center gap-8 py-20 p-2 xs:px-10 md:px-15 relative"
    >
      <h2 className="text-5xl font-bold text-center">
        About <span className="text-primary">Me</span>
      </h2>
      <div>
        <img
          src={imagePlaceholderSquare}
          alt="about me image"
          className="w-[150px] h-[150px] rounded-full border-[0.4rem] border-primary"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-7">
        <h3 className="text-center text-[1.4rem] font-semibold">
          From Nuts and Bolts to Lines of Code
        </h3>
        <p
          className={`md:max-w-[80%] text-paragraphs px-4 xs:px-10 md:px-15 ${
            readMore
              ? ''
              : 'text-center overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]'
          }`}
        >
          A few years ago, I found myself at a professional crossroads. I had
          graduated in Mechanical Engineering in 2015 and had accumulated
          extensive experience in various roles, from assisting at a consultancy
          to working as a field engineer at one of the world's largest oil
          companies. On the surface, my career path appeared solid, but deep
          down, I knew my heart wasn't in it.
          <br />
          <br />
          I vividly recall the moment that changed the course of my life. It was
          an ordinary afternoon, and a friend of mine was grappling with a
          programming problem. His application needed to determine whether a
          word was a palindrome or not. Despite being a complete novice in the
          world of programming, I decided to offer a fresh perspective, free
          from the constraints of coding.
          <br />
          <br />
          Our conversation was brief but enlightening. I began to see how
          programming concepts could be ingeniously applied to solve everyday
          problems. As a mechanical engineer, I've always enjoyed building
          physical tools to create solutions or enhance existing processes, but
          I had never considered using programming to develop applications and
          digital tools to solve more complex problems. That was the moment when
          my interest in programming was sparked.
          <br />
          <br />
          Since then, I couldn't quell my thirst for learning. I have been
          passionately studying programming, dedicating my spare time to create
          exciting projects and honing my skills day by day.
          <br />
          <br />
          My transition from mechanical engineering to web development has been
          an exciting and evolving adventure. As I pursue my dream of becoming a
          web developer, I leverage my background and experience as an engineer
          to approach problems creatively.
          <br />
          <br />
          Today, I can confidently say that I have found my calling in web
          development. Each day serves as a reminder that, at times, changing
          course can lead to unexpected discoveries and genuine satisfaction in
          what we do, even if it means completely reinventing oneself
          professionally.
          <br />
          <br />
          In summary, my story is a testament to how a simple conversation about
          palindromes can transform your life if you are willing to embrace new
          opportunities. So, if you ever find yourself at a similar crossroads,
          remember that change can be your best ally in the pursuit of your true
          passion. Life is too short not to follow your heart and dreams, even
          if it means leaving nuts and bolts behind!
        </p>
      </div>
      <button
        type="button"
        className="transform active:scale-110 transition-all text-secondary bg-primary hover:bg-primaryHover rounded-lg text-lg font-semibold px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-bgDark dark:hover:text-white dark:hover:ring-1 dark:hover:ring-primary focus:outline-none"
        onClick={() => {
          readMore ? (window.location.href = '#about') : ''
          setReadMore((prev) => !prev)
        }}
      >
        {readMore ? 'Read Less' : 'Read More'}
      </button>
    </section>
  )
}

export default About
