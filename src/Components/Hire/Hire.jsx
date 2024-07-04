import Lottie from "lottie-react";
import emailLottie from "../../assets/LottieFile/email.json";

const Hire = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="w-full text-center text-3xl font-bold">Hire Me</h2>
      <div className="hero ">
        <div className="hero-content w-full flex-col lg:gap-10 lg:flex-row-reverse justify-between">
          <div className=" flex-1">
            <Lottie animationData={emailLottie}></Lottie>
          </div>
          <div className="flex-1">
            <h2 className="w-full text-center text-3xl font-bold">
              Let&apos;s Talk!
            </h2>
            <form className="space-y-5 ">
              <div>
                <label className="text-sm">Full name</label>
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder=""
                  className="w-full p-2 rounded bg-gray-800"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  className="w-full p-2 rounded bg-gray-800"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracki uppercase rounded hover:bg-[#c49037] bg-[#dbb878] text-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;

{
  /* <div className="space-y-5 flex-1">
  <h2 className="w-full text-center text-3xl font-bold">Let&apos;s Connect!</h2>
  <div className="flex items-center gap-3">
    <MdEmail size={30} />
    <h3 className="text-xl">1154almamun@gmail.com</h3>
  </div>
  <div className="flex items-center gap-3">
    <FaPhoneVolume size={30} />
    <h3 className="text-xl">+880 1745093497</h3>
  </div>
  <div className="flex items-center gap-4">
    <a href="https://www.linkedin.com/in/a1-mamun" target="_blank">
      <FaLinkedin size={30} />
    </a>
    <a href="https://github.com/A1-mamun" target="_blank">
      <FaSquareGithub size={30} />
    </a>
    <a href="https://www.facebook.com/A1Mamun178" target="_blank">
      <FaSquareFacebook size={30} />
    </a>
  </div>
</div>; */
}
