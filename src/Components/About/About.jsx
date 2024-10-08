import Lottie from "lottie-react";
import aboutLottie from "../../assets/LottieFile/about.json";
const About = () => {
  return (
    <div id="about" className="container mx-auto lg:h-[calc(100vh-96px)] pb-28">
      <div className="hero min-h-screen text-[#fff]">
        <div className="hero-content w-full flex-col lg:gap-20 lg:flex-row justify-between">
          <div className="flex-1 lg:w-96 ">
            <Lottie animationData={aboutLottie} className="-ml-10"></Lottie>
          </div>
          <div className="flex-1 px-5 lg:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-txt-color">
              About Me
            </h1>
            <p className="py-6 text-lg text-justify">
              I am a front-end web developer currently studying at Rajshahi
              University of Engineering and Technology ( RUET ) in Rajshahi,
              Bangladesh. I am in my 3rd year in the Department of Computer
              Science and Engineering. I work with the MERN stack environment
              and primarily use the ReactJS framework to build dynamic and
              responsive web applications. Additionally, I am a competitive
              programmer with some knowledge of C and C++ programming languages.
              My passion for coding drives me to continuously improve my skills
              and stay updated with the latest technologies in web development.
            </p>
            <div className="space-y-2">
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">Name: </span>
                Md. Abdullah al mamun
              </h2>
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">NATIONALITY: </span>
                Bangladeshi
              </h2>
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">ADDRESS: </span>
                Rajshahi, bangladesh
              </h2>
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">PHONE: </span>+880
                1745093497
              </h2>
              <h2 className="font-bold text-lg ">
                <span className="uppercase text-txt-color">E-MAIL: </span>
                1154almamun@gmail.com
              </h2>
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">Languages: </span>
                English,Bangla,Hindi
              </h2>
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">Education: </span>
                computer science & engineering <br /> (3rd year)
              </h2>
              <h2 className="font-bold text-lg uppercase">
                <span className="uppercase text-txt-color">University: </span>
                Rajshahi University of Engineering and Technology (RUET)
                Rajshahi, Bangladesh
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
