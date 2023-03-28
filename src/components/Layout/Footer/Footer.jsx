import React from "react";
import { NavLink } from "react-router-dom";
import footerBg from "./images/footBg.png";

const Footer = () => {
  return (
    <footer
      className=" flex justify-center items-center text-center bg-dark text-muted md:h-60 h-72 text-gray-500 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footerBg})` }}>
      <div className=" flex md:flex-row justify-between flex-col md:items-start md:gap-60 lg:gap-96  gap-3 items-center">
        <div>
          <div>
            <h1 className=" md:text-4xl text-2xl">
              <span className="font-bold">IMBA</span>
              <span className="font-thin">STUDIO</span>
            </h1>
            <p className="text-base tracking-wider">CREATIVE DESIGNERS TEAM</p>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="md:text-3xl mb-3 text-xl">Contact Us:</h5>
          <div>
            <span>Email: </span>
            <NavLink
              to="mailto: workimba@gmail.com"
              className="hover:text-blue-600">
              workimba@gmail.com
            </NavLink>
          </div>
          <div>
            <span>Phone: </span>
            <NavLink to="tel: +998919449491" className="hover:text-blue-600">
              +998 91 944 94 91
            </NavLink>
          </div>
          <div>
            <span>Whatsapp: </span>
            <NavLink
              to="https://wa.me/+998915956636"
              className="hover:text-blue-600">
              +998 91 595 66 36
            </NavLink>
          </div>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
