import React from "react";
import girl_img from "../assets/girl_img.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-40 text-center text-4xl text-zinc-50">
        About Me
        {/* <span className="text-neutral-500">Me</span> */}
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-zxl" src={girl_img} alt="aboutme"/>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a passionate and dedicated Frontend Developer with a strong
              foundation in React, Redux, Tailwind CSS, Bootstrap, JavaScript,
              HTML, and CSS. With a keen eye for detail and a commitment to
              creating responsive and user-friendly interfaces, I have developed
              several projects showcasing my skills. Additionally, I have
              experience working with Git and GitHub for version control and
              collaboration. My learning journey includes building projects
              using Python and Flask, demonstrating versatility in backend
              development. As a fresher, I am eager to bring my skills and
              enthusiasm to contribute to innovative and impactful projects in a
              professional setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
