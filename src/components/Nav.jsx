import React, { useState } from "react";
import Button from "./Button";
import logoMegafit from "../assets/logo-megafit.png";
import { Link } from "react-router-dom";
import CheckOutsideClick from "../hooks/CheckOutsideClick";

const Navbar = () => {
  const Links = [
    {
      name: "HOMEPAGE",
      link: "/",
    },
    {
      name: "MEMBERSHIP",
      link: "membership",
    },
    {
      name: "FACILITIES",
      link: "facilities",
    },
    {
      name: "ABOUT",
      link: "about",
    },
    {
      name: "ARTICLE",
      link: "article",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex flex items-center justify-between bg-white py-4 px-5 md:px-10">
        <div onClick={() => setOpen(!open)} className="text-3xl text-lime-400 cursor-pointer md:hidden">
          <CheckOutsideClick onClickOutside={handleClose}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </CheckOutsideClick>
        </div>
        <div className="cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img src={logoMegafit} className="w-40 md:w-52" alt="logo" />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static md:bg-white bg-lime-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-80" : "top-[-490px] opacity-0 md:opacity-80"
          }`}
        >
          {Links.map(({ name, link }) => (
            <li key={name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link to={link} className="text-white md:text-gray-800 md:hover:text-lime-400 hover:text-gray-800 duration-500">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
