import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import img2 from "./images/fb1.png";
import image1 from "./images/s3.png"; 
import internet from "./images/internet.svg"; 


function Projects() {
  const data = [
    {
      id: 1,
      img: image1, // Reference the imported image
      project_name: "ShopKart",
      desc: "ShopKart is an intuitive e-commerce website that provides a streamlined shopping experience for men and women. ShopKart is built with HTML, CSS, and JavaScript, with functionalities like search, wishlist, adding items to cart, and more in a responsive design.",
      web:"https://e-commerce-website-woad-nine.vercel.app/",
      git:"https://github.com/AkashS0109/e-commerce-website",
    },
    {
      id: 2,
      img:img2,
      project_name: "JobConnect", // Replace with the actual project name
      desc: "JobConnect is a fully responsive job portal that connects students with their dream jobs. Students and professionals can apply for jobs, upload their resumes, edit their profiles, while recruiters can post jobs, view applicants' applications, and register their companies.", // Add a proper description
      web:"https://job-hunt-eosin.vercel.app/",
      git:"https://github.com/AkashS0109/JobHunt"
    }
  ];

  return (
    <div id="project" className="flex flex-wrap justify-center items-center text-center w-full xs:text-xl py-5 p-3 ">
       
        <div  className="xl:w-7/12 2xl:py-12 lg:w-1/2 sm:w-1/2 w-11/12 ">
          <div className="text-white font-semibold py-10">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold">Projects</h1>
          </div>
          {data.map((project) => (
          <div className='my-10 border-2 border-gray-50 xl:rounded-2xl rounded-xl hover:shadow-lg hover:shadow-white hover:data-aos="zoom-in"' >
          <div className="flex flex-wrap   2xl:p-2 hover:[background-color:#0a112b]">
            <div className="2xl:w-1/2 h-auto">
              <img className="w-full h-full object-cover rounded-t-lg" src={project.img} alt={project.project_name} />
            </div>
            <div className="2xl:w-1/2 p-3">
              <div className="text-white flex justify-between items-center 2xl:mt-1">
                <h1 className="font-bold text-lg 2xl:text-3xl p-2 lg:text-3xl">{project.project_name}</h1>
                <div className="flex justify-center items-center gap-5">
                  {/* Add a clickable link for the project */}
                  <a href={project.web} target="_blank" rel="noopener noreferrer">
                    <img className="w-6" src={internet} alt="Web link" />
                  </a>
                  <GitHubIcon fontSize="medium" />
                </div>
              </div>
              <div className="flex 2xl:mt-4 text-white">
                <p className="text-left xs:text-sm md:text-2xl xs:leading-5 p-2 rounded-b-lg">{project.desc}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
        </div>
      
    </div>
  );
}

export default Projects;