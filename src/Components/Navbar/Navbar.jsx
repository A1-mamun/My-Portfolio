import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About Me</a>
      </li>
      <li>
        <a href="">Skills</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </>
  );
  return (
    <div className="fixed w-full">
      <div className="navbar container mx-auto pt-5  ">
        <div className="navbar-start">
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              AL-MAMUN
            </h2>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-xl">
            {navlinks}
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
                  {navlinks}
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
