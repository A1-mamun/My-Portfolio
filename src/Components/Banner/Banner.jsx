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
    <div id="home" className="container mx-auto h-[calc(100vh-96px)]  mt-24">
      <div className="hero min-h-screen text-[#fff]">
        <div className="hero-content w-full flex-col lg:gap-10 lg:flex-row-reverse justify-between">
          <div>
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="text-white ">
            <p className="text-xl uppercase font-medium">Hello, I&apos;m</p>
            <p className="pb-6 text-3xl uppercase font-medium text-txt-color">
              Md. Abdullah Al Mamun
            </p>
            <h1 className="text-5xl font-bold uppercase">
              jnr. front-end{" "}
              <span className="text-txt-color">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <h2 className=" text-xl font-medium mt-1">( Mern Stack )</h2>
            <div className="flex gap-5">
              <a
                href="https://docs.google.com/document/d/1ylfbs3Ihe1VeBo-Yg_Y6z_DYMAXvZ_W3A--sathNiRI/edit"
                target="_"
              >
                <button className=" py-2 rounded-lg mt-8 px-5  border-none font-bold flex items-center gap-3 uppercase  bg-txt-color hover:bg-hover-color text-[#000] text-lg ">
                  Resume <FaFileDownload className="text-xl animate-bounce" />
                </button>
              </a>
              <button
                onClick={() => scrollToSection("hire")}
                className=" py-2 rounded-lg mt-8 px-5  border-none font-bold flex items-center gap-3 uppercase  bg-txt-color hover:bg-hover-color text-[#000] text-lg "
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
