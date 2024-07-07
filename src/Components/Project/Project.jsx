import tailwind from "../../assets/icon/tailwind.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import c from "../../assets/icon/c.png";
import cpp from "../../assets/icon/cpp.png";
import project1 from "../../assets/image/echojournal.png";
import project2 from "../../assets/image/foodvilla.png";
import project3 from "../../assets/image/potteryverse.png";
const Project = () => {
  return (
    <div id="projects" className="container mx-auto pt-24">
      <h2 className="text-4xl text-center font-bold text-txt-color">
        Some of My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 md:gap-7 lg:gap-10  max-w-7xl mx-auto my-10 text-[#fff]">
        <div className=" p-5 border rounded-lg space-y-4 ">
          <img className="w-full h-48" src={project1} alt="" />
          <h3 className="text-2xl text-center font font-medium border-b">
            EchoJournal
          </h3>
          <h3 className="text-2xl text-center text-txt-color">
            A Dynamic Platform for Reading and Sharing Articles
          </h3>
          <p className=" text-justify grow">
            EchoJournal is a platform for reading and sharing articles, offering
            both free and premium content. Normal users can post one article and
            read free content, while premium subscribers can access premium
            articles and post unlimited articles. The admin panel allows
            administrators to manage content and user privileges, ensuring a
            secure and efficient experience. EchoJournal fosters knowledge
            sharing, creativity, and community interaction, providing a robust
            space for both readers and writers.
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
              <a
                className="btn btn-sm btn-block flex-1  bg-txt-color hover:bg-hover-color text-[#000]"
                href="https://github.com/A1-mamun/Echo-Journal-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm btn-block flex-1  bg-txt-color hover:bg-hover-color text-[#000]"
                href="https://github.com/A1-mamun/Echo-Journal-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
            <a
              className="btn btn-sm btn-block  bg-txt-color hover:bg-hover-color text-[#000]"
              href="https://echojournal-53c24.web.app"
              target="_blank"
            >
              Live Website
            </a>
          </div>
        </div>

        <div className=" p-5 border rounded-lg space-y-4 flex flex-col">
          <img className="w-full h-48" src={project2} alt="" />

          <h3 className="text-2xl text-center font font-medium border-b">
            FoodVilla
          </h3>
          <h3 className="text-2xl text-center text-txt-color">
            A One-Stop Hub for Purchasing and Sharing Delicious Foods
          </h3>
          <p className=" text-justify grow">
            FoodVilla is a platform where users can purchase food and add food
            items. Users can view their purchase history and the items they have
            added, making it easy to keep track of their transactions and
            contributions. FoodVilla aims to provide a convenient and efficient
            experience for food enthusiasts, combining purchasing and sharing in
            one seamless interface.
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
              <a
                className="btn btn-sm btn-block flex-1  bg-txt-color hover:bg-hover-color text-[#000]"
                href="https://github.com/A1-mamun/Food-Villa-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm btn-block flex-1  bg-txt-color hover:bg-hover-color text-[#000]"
                href="https://github.com/A1-mamun/Food-Villa-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
            <a
              className="btn btn-sm btn-block  bg-txt-color hover:bg-hover-color text-[#000]"
              href="https://food-villa-5b01d.web.app"
              target="_blank"
            >
              Live Website
            </a>
          </div>
        </div>
        <div className=" p-5 border rounded-lg space-y-4 flex flex-col ">
          <img className="w-full h-48" src={project3} alt="" />

          <h3 className="text-2xl text-center font font-medium border-b">
            PotteryVerse
          </h3>
          <h3 className="text-2xl text-center text-txt-color">
            Your Marketplace for Unique Art and Craft Creations
          </h3>
          <p className=" text-justify grow">
            PotteryVerse is a platform for art and craft enthusiasts to explore,
            purchase, and add unique items. Users can browse a wide range of
            handcrafted goods, add their own creations to the marketplace, and
            view their purchase and added history. PotteryVerse fosters a
            community for artisans and shoppers alike, promoting creativity and
            supporting the sharing of beautiful, handcrafted items.
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
              <a
                className="btn btn-sm btn-block flex-1  bg-txt-color hover:bg-hover-color text-[#000]"
                href="https://github.com/A1-mamun/Pottery-Verse-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm btn-block flex-1  bg-txt-color hover:bg-hover-color text-[#000]"
                href="https://github.com/A1-mamun/Pottery-Verse-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
            <a
              className="btn btn-sm btn-block  bg-txt-color hover:bg-hover-color text-[#000]"
              href="https://pottery-verse.web.app"
              target="_blank"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
