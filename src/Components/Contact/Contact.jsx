import { FaLinkedin } from "react-icons/fa";
import {
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareGithub,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex justify-around py-16 ">
        <div className="space-y-2">
          <h2 className="w-full text-center text-5xl font-bold">
            Let&apos;s Connect!
          </h2>
          <h4 className="text-xl ml-10">I&apos;m just a message away.</h4>
        </div>
        <div className=" space-y-5">
          <div className="flex items-center gap-3">
            <MdEmail size={30} />
            <h3 className="text-xl">1154almamun@gmail.com</h3>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneVolume size={30} />
            <h3 className="text-xl">+8801745093497</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="w-full bg-gray-200">
  <div className="space-y-5 flex flex-col items-center">
    <h2 className="w-full text-center text-3xl font-bold">
      Let&apos;s Connect!
    </h2>
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
  </div>
</div>; */
}
