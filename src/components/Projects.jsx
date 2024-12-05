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

import {motion} from "framer-motion";

import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectvarients = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeout",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (

    <section className="px-6 py-10" id="work" >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10"> WORK</h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          PROJECTS.map((item) => {
            <motion.div
            key={item.id}
            className="relative rounded-lg overflow-hidden h-[500px] transition-transform" initial="hidden" whileInView="visible" viewport={{once:true}} variants={projectvarients}>
                <img src={item.imgSrc} alt={item.title} className="inset-0 absolute w-full h-full object-cover transition-opacity duration-300"/>
                <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                  <h2 className="text-2xl font-medium mb-4">{item.title}</h2>
                  <div className=" flex flex-col justify-between">
                    <p className="mb-4 flex-grow text-2xl">{item.description}</p>
                    <a href={item.link} target="_blank" ref="noopener norefferer" className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center">view</a>
                  </div>
                </div>
            </motion.div>
          })
        }
      </div>

    </section>

  );
};

export default Projects;
