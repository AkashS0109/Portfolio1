import React from 'react'
import im from './def.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CV from "./images/Akash.pdf"
import "./Hero.css"

function Hero() {


  return (
    <div id='hero' className=' py-2'>
      <div className='text-white flex 2xl:pt-20 justify-center '>
        <div className='w-full flex justify-center text-center'>
          <h1 className='xs:w-full xs:p-14 xs:text-2xl sm:text-3xl md:text-4xl 2xl:py-20 2xl:w-3/4 2xl:text-4xl 2xl:leading-12 '>
            <span className='font-bold text-white brightness-200'>
              <span className="">Hello, I'm Akash Singh.</span>
            I'm a passionate full-stack developer. </span> <br/>I enjoy building sites and solving problems in MERN stack.
          </h1>
        </div>
      </div>
      <div className='flex justify-center text-white text-center 2xl:py-10 xs:gap-3 lg-py-5 gap-5   items-center'>
        <a href={CV} target="_blank"> 
          <button className='xs:text-xl xs:p-2 xs:px-4 sm:text-xl sm:p-4 lg:text-2xl flex xs:gap-1 md:gap-2 gap-2 border-2 rounded-xl
           font-medium text-white 2xl:px-6 justify-center items-center bg-violet-500 hover:bg-violet-600 hover:border-none
            active:bg-violet-700 focus:outline-none focus:ring-violet-300  border-violet-500' download> 
            Resume <img className='xs:h-4 md:h-5 animate-bounce' src={im} />
          </button>
        </a>
        <a href='https://github.com/AkashS0109' target="_blank">
          <button className='xs:p-1 sm:p-2 lg:p-4 border-2 xl:border-2 border-blue-500 items-center p-3 hover:bg-black hover:border-black rounded-2xl'>
            <GitHubIcon fontSize='large' />
          </button>
        </a>
        <a href='https://www.linkedin.com/in/akash-singh-47b38215b/' target='_blank'>
          <button className='xs:p-1 sm:p-2 lg:p-4 border-2 border-blue-500 xl:border-2 flex items-center p-3 hover:bg-blue-500 hover:border-blue-500 rounded-2xl'>
            <LinkedInIcon fontSize='large' />
          </button>
        </a>
      </div>
      <div className='text-white flex justify-center p-4'></div>
      <div className='flex justify-center items-center p-10'>
        <div className='xl:w-1/2  xs:w-11/12 text-white border-2'></div>
      </div>
    </div>
  )
}

export default Hero
