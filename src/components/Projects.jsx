// import React from "react";
// import { PROJECTS } from "../constants";
// // import project1 from "../assets/projects/project_1.jpg";

// const Projects = () => {
//   return (
//     <section className="p-8 " id="projects">
//       <h2 className="my-10 text-center text-3xl lg:text-8xl">My Work</h2>
//       <div className="columns-1 gap-4 md:columns-2 lg:columns-3">

        

//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from "react";
// import { PROJECTS } from "../constants";

// const Projects = () => {
//   return (
//     <section className="p-8 " id="projects">
//       <h2 className="my-10 text-center text-3xl lg:text-8xl">My Work</h2>
//       <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
//         {PROJECTS.map((item) => (
//           <a
//             href={item.link}
//             key={item.id}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block mb-6"
//           >
//             <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
//               <img
//                 src={item.imgSrc}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//               <h3 className="p-4 text-xl font-semibold text-center">
//                 {item.title}
//               </h3>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="p-8 bg-black text-white" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-4xl text-white">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {PROJECTS.map((item) => (
          <div 
            key={item.id} 
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src={item.imgSrc} 
              alt={item.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Project
              </a>
            </div>
          </div>
        ))} */}
        
      </div>
    </section>
  );
};

export default Projects;
