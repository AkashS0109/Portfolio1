import React from 'react'
// if the sliding bar comes on increasing text responsive then give paddingto content
function About() {
  return (
    <div id='about' className='flex justify-center items-center text-center w-full xs:p-8 my-10 xs:text-xl  '>
     <div className='2xl:w-2/3  2xl:py-12 lg:w-2/3'>
      <div className=' text-white font-semibold  '>
        <h1 className=' py-2 text-3xl sm:text-3xl lg:text-4xl'>About Me</h1>
      </div>
      <div className=' text-white md:p-10 pt-6 2xl:p-20 2xl:px-15   '>
       <p className='2xl:text-3xl md:text-2xl  md:leading-9 2xl:leading-10 '>
       I am  MCA graduate and a passionate full-stack web developer with a strong foundation in building dynamic and responsive web applications.I thrive on the challenge of analyzing complex problems and the satisfaction of crafting efficient solutions.
      My core tech stack includes<span className='font-bold'> React.js</span>,<span className='font-bold'> Node.js</span>,<span className='font-bold'>Expres.js </span>and <span className='font-bold'>MongoDB</span>.Also proficient in other Languages like C++,Java(core).
      I'm always ready to leran new technologies and frameworks and to collaborate with like-minded individuals to create innovative and impactful projects.
I am currently seeking a full-time position as a software developer where I can contribute my skills, grow professionally, and tackle exciting challenges with innovative solutions.
       </p>
       </div>
    </div>
    </div>
  )
}

export default About
