import { FaFileDownload } from "react-icons/fa";
import image from "../../assets/image/banner_img.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["DEVELOPER"],
    loop: true,
  });
  return (
    <div className="container mx-auto h-[calc(100vh-96px)]  mt-24">
      <div className="hero min-h-screen">
        <div className="hero-content w-full flex-col lg:gap-10 lg:flex-row-reverse justify-between">
          <div>
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="text-white ">
            <p className="text-xl uppercase ">Hello, I&apos;m</p>
            <p className="pb-6 text-3xl uppercase ">Md. Abdullah Al Mamun</p>
            <h1 className="text-5xl font-bold uppercase">
              jnr. front-end{" "}
              <span className="">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h1>

            <a href="" target="_">
              <button className=" py-2 rounded-lg mt-8 px-5  border-none font-bold flex items-center gap-3 uppercase  text-lg ">
                Resume <FaFileDownload className="text-xl animate-bounce" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
