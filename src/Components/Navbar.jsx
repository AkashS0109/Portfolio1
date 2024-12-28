import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center justify-center border-b-2 py-2 shadow-sm shadow-gray-50">
      <div className="flex px-3  text-center text-white  border-white   font-semibold xs:text-sm xs:gap-5 sm:text-lg sm:gap-5  md:gap-12 md:text-xl  xl:gap-11 2xl:gap-20 2xl:text-xl 2xl:py-1">
       <a href='#hero'><h1 >Home</h1></a> 
       <a href='#about'> <h1>About</h1></a>
       <a href='#project'> <h1>Project</h1></a>
       <a href='#skills'> <h1>Skills</h1></a>
       <a href='#contact'> <h1>Contact</h1></a>
      </div>
    </div>
  );
}

export default Navbar;
