import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import image from "../../assets/image/banner_img.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navLinks = (
    <>
      <li className="hover:border border-txt-color rounded-lg">
        <a onClick={() => scrollToSection("home")}>Home</a>
      </li>
      <li className="hover:border border-txt-color rounded-lg">
        <a onClick={() => scrollToSection("about")}>About Me</a>
      </li>
      <li className="hover:border border-txt-color rounded-lg">
        <a onClick={() => scrollToSection("skills")}>Skills</a>
      </li>
      <li className="hover:border border-txt-color rounded-lg">
        <a onClick={() => scrollToSection("projects")}>Projects</a>
      </li>
      <li className="hover:border border-txt-color rounded-lg">
        <a onClick={() => scrollToSection("hire")}> Message</a>
      </li>
      <li className="hover:border border-txt-color rounded-lg">
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </li>
    </>
  );
  return (
    <div className="fixed w-full top-0 bg-[#1D232A] z-10 ">
      <div className="navbar container mx-auto pt-5 text-[#fff] ">
        <div className="navbar-start">
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="ring-txt-color ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
                <img src={image} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-txt-color">
              AL-MAMUN
            </h2>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-xl">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className=" mr-2 md:mr-3 lg:mr-5 text-sm md:text-base">
            {isOpen ? (
              <MdClose onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
            )}
            <div className="absolute">
              <div
                className={`relative h-full transition-transform duration-500 transform ease-linear ${
                  isOpen ? "-translate-x-24" : "translate-x-full -right-24 "
                }`}
              >
                <ul className=" menu menu-sm dropdown-content duration-1000 mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
