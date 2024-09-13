import { FaFileDownload } from "react-icons/fa";
import image from "../../assets/image/banner_img.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaArrowTurnDown } from "react-icons/fa6";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["DEVELOPER"],
    loop: true,
  });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="home"
      className="container mx-auto lg:h-[calc(100vh-96px)] lg:mt-24"
    >
      <div className="hero min-h-screen text-[#fff]">
        <div className="hero-content w-full  flex-col lg:gap-10 lg:flex-row-reverse justify-between">
          <div>
            <img src={image} className="lg:max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="text-white ">
            <p className=" text-sm md:text-lg lg:text-xl uppercase font-medium">
              Hello, I&apos;m
            </p>
            <p className="pb-6 text-xl md:text-2xl lg:text-3xl uppercase font-medium text-txt-color">
              Md. Abdullah Al Mamun
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              jnr. front-end <br />{" "}
              <span className="text-txt-color">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <h2 className=" text-sm md:text-lg lg:text-xl font-medium mt-1">
              ( Mern Stack )
            </h2>
            <div className="flex gap-5">
              <a
                href="https://drive.google.com/file/d/12uWGdJhBwjnlcMPHf0vt_qA0OvGQb4FJ/view"
                target="_"
              >
                <button className="px-3 py-2 lg:px-5 lg:py-2 rounded-lg mt-8  border-none font-bold flex items-center gap-3 uppercase  bg-txt-color hover:bg-hover-color text-[#000] text-sm md:text-base lg:text-lg ">
                  Resume <FaFileDownload className="text-xl animate-bounce" />
                </button>
              </a>
              <button
                onClick={() => scrollToSection("hire")}
                className="px-3 py-2 lg:px-5 lg:py-2 rounded-lg mt-8   border-none font-bold flex items-center gap-3 uppercase  bg-txt-color hover:bg-hover-color text-[#000] text-sm md:text-base lg:text-lg "
              >
                Hire me <FaArrowTurnDown className="text-xl animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
