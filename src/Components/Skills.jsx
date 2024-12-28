import React, { useState } from 'react';
import htm from "./images/html.svg";
import css from "./images/css-alt.svg";
import js from "./images/javascript.svg";
import rea from "./images/re.svg";
import tail from "./images/tailc.svg";
import express from "./images/ex.svg";
import node1 from "./images/node1.svg";
import mongo from "./images/mongodb-icon.svg";
import git from "./images/git-scm-icon.svg";
import post from "./images/post.svg";



function Skills() {
  const data = [
    { id: "html", label: "HTML", img: htm },
    { id: "css", label: "CSS", img: css },
    { id: "js", label: "JavaScript", img: js },
    { id: "rea", label: "React", img: rea },
    { id: "tail", label: "Tailwind", img: tail },
    { id: "node1", label: "Node.js", img: node1 },
    { id: "express", label: "Express", img: express },
    { id: "mongo", label: "MongoDB", img: mongo },
    { id: "git", label: "Git", img: git },
    { id: "post", label: "Postman", img: post },

  ];

  const [hoveredId, setHoveredId] = useState("");

  const handleHover = (id) => {
    setHoveredId(id);
  };

  return (
    <div className='w-full flex flex-wrap items-center justify-center text-center p-5  ' id='skills'>
      <div className='w-full p-5'>
        <h1 className='text-white xs:xl  lg:text-3xl  2xl:text-4xl  2xl:py-18  font-bold  text-3xl '>Skills</h1>
      </div>
      <div className='xs:full  py-10 flex-wrap sm:w-3/4 gap-4 sm:gap-4  lg:w-2/3 xl:w-1/2 2xl:w-4/5 flex justify-center items-center 2xl:gap-10 2xl:px-15 hover:data-aos="zoom in"'>
        {data.map((item) => (
          <div 
            key={item.id}
            id={item.id}
            className='w-16 2xl:pb-20 pb-5 brightness-150 relative flex items-center justify-center text-white font-semibold'
            onMouseEnter={() => handleHover(item.id)}
            onMouseLeave={() => setHoveredId("")}
          >
            <img src={item.img} alt={item.label} className='h-12 hover:scale-125 transition-transform' />
            {hoveredId === item.id && (
              <span className='absolute hover:bg-black hover:opacity-100 text-center p-1 text-xs'>{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills; 