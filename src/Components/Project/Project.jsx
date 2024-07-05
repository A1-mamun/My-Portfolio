import tailwind from "../../assets/icon/tailwind.png";
import js from "../../assets/icon/JavaScript.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import c from "../../assets/icon/c.png";
import cpp from "../../assets/icon/cpp.png";
import project1 from "../../assets/image/banner_img.jpg";
const Project = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center">Some of My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 md:gap-7 lg:gap-10  max-w-7xl mx-auto my-10">
        <div className=" p-5 border rounded-lg space-y-4 ">
          <img className="w-full h-48" src={project1} alt="" />
          <h3 className="text-2xl">title</h3>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            blanditiis nostrum expedita harum! Esse, asperiores vel ab quasi
            doloremque ad, repudiandae aut explicabo iure tempora provident
            libero impedit perspiciatis non.
          </p>
          <h3 className="text-center text-xl">Used Technologies</h3>
          <div className="flex flex-wrap justify-center  gap-5">
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={tailwind}
              alt="TailwindCSS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={react}
              alt="ReactJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={node}
              alt="NodeJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={express}
              alt="ExpressJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={mongoDb}
              alt="MongoDb"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={firebase}
              alt="Firebase"
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex justify-between gap-3 w-full">
              <a className="btn btn-sm btn-block flex-1" href="">
                Client Side Code
              </a>
              <a className="btn btn-sm btn-block flex-1" href="">
                Server Side Code
              </a>
            </div>
            <a className="btn btn-sm btn-block" href="">
              Live Website
            </a>
          </div>
        </div>
        <div className=" p-5 border rounded-lg space-y-4 ">
          <img className="w-full h-48" src={project1} alt="" />
          <h3 className="text-2xl">title</h3>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            blanditiis nostrum expedita harum! Esse, asperiores vel ab quasi
            doloremque ad, repudiandae aut explicabo iure tempora provident
            libero impedit perspiciatis non.
          </p>
          <h3 className="text-center text-xl">Used Technologies</h3>
          <div className="flex flex-wrap justify-center  gap-5">
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={tailwind}
              alt="TailwindCSS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={react}
              alt="ReactJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={node}
              alt="NodeJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={express}
              alt="ExpressJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={mongoDb}
              alt="MongoDb"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={firebase}
              alt="Firebase"
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex justify-between gap-3 w-full">
              <a className="btn btn-sm btn-block flex-1" href="">
                Client Side Code
              </a>
              <a className="btn btn-sm btn-block flex-1" href="">
                Server Side Code
              </a>
            </div>
            <a className="btn btn-sm btn-block" href="">
              Live Website
            </a>
          </div>
        </div>
        <div className=" p-5 border rounded-lg space-y-4 ">
          <img className="w-full h-48" src={project1} alt="" />
          <h3 className="text-2xl">title</h3>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            blanditiis nostrum expedita harum! Esse, asperiores vel ab quasi
            doloremque ad, repudiandae aut explicabo iure tempora provident
            libero impedit perspiciatis non.
          </p>
          <h3 className="text-center text-xl">Used Technologies</h3>
          <div className="flex flex-wrap justify-center  gap-5">
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={tailwind}
              alt="TailwindCSS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={react}
              alt="ReactJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={node}
              alt="NodeJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={express}
              alt="ExpressJS"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={mongoDb}
              alt="MongoDb"
            />
            <img
              className="w-12 h-12 hover:scale-125 duration-300"
              src={firebase}
              alt="Firebase"
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex justify-between gap-3 w-full">
              <a className="btn btn-sm btn-block flex-1" href="">
                Client Side Code
              </a>
              <a className="btn btn-sm btn-block flex-1" href="">
                Server Side Code
              </a>
            </div>
            <a className="btn btn-sm btn-block" href="">
              Live Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
