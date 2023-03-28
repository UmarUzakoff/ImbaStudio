import React, { useState } from "react";
import imbaLogo from "./images/imbaLogo.svg";
import close from "./images/close.png";
import imbaLogoLight from "./images/imbaLogoLight.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    window.location.href = "#about";
  };
  const onClick2 = () => {
    window.location.href = "#price";
  };

  return (
    <header className=" py-1 xl:px-20 bg-gray-100 overflow-y-hidden fixed top-0 w-full z-20">
      <dh-component>
        <nav className="w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center" aria-label="Home" role="img">
              <img
                className="cursor-pointer w-36 sm:w-36  "
                src={imbaLogo}
                alt="logo"
              />
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className="sm:block rounded-full bg-black md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <svg
                  className="w-10 h-10"
                  fill="white"
                  viewBox="-2.7 -2 25 25"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
                <svg
                  className="hidden w-10 h-10"
                  fill="white"
                  viewBox="-2.7 -2 25 25"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              <div
                className={`py-4 md:block lg:block ${show ? "" : "hidden "}`}
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <button
                  onClick={() => setShow(!show)}
                  className="block rounded-md md:hidden lg:hidden text-gray-500 fixed  md:bg-transparent z-30 top-0">
                  <img className="h-12 w-12 mt-3" src={close} alt="hide" />
                </button>
                <ul
                  className={`pl-5 bg-black text-white opacity-90 flex gap-3 justify-start items-start text-xl md:text-base py-4 md:flex flex-col md:flex-row fixed md:relative top-0 bottom-0 left-0 right-0 md:bg-transparent  z-20`}>
                  <div
                    className="flex items-center"
                    aria-label="Home"
                    role="img">
                    <img
                      className="cursor-pointer mb-3 w-36 sm:w-36  md:hidden"
                      src={imbaLogoLight}
                      alt="logo"
                    />
                  </div>
                  <li className="text-gray-600 text-base hover:text-black hover:font-bold cursor-pointer md:ml-3 md:pt-0">
                    <NavLink
                      to={"/"}
                      className="text-white md:text-inherit text-base font-medium hover:opacity-80">
                      Home
                    </NavLink>
                  </li>
                  <li className="text-gray-600 text-base hover:text-black hover:font-bold cursor-pointer md:ml-3 md:pt-0">
                    <NavLink
                      to={"Gallery"}
                      className="text-white md:text-inherit text-base font-medium hover:opacity-80">
                      Video Gallery
                    </NavLink>
                  </li>
                  <li className="text-gray-600 text-base hover:text-black hover:font-bold cursor-pointer md:ml-3 md:pt-0">
                    <NavLink
                      to={"/3D_Designs"}
                      className="text-white md:text-inherit text-base font-medium hover:opacity-80">
                      3D Designs
                    </NavLink>
                  </li>
                  <li className="text-gray-600 text-base hover:text-black hover:font-bold cursor-pointer md:ml-3 md:pt-0">
                    <NavLink
                      to={"/"}
                      onClick={onClick}
                      className="text-white md:text-inherit text-base font-medium hover:opacity-80">
                      About
                    </NavLink>
                  </li>
                  <li className="text-gray-600 text-base hover:text-black hover:font-bold cursor-pointer md:ml-3 md:pt-0">
                    <NavLink
                      to={"/"}
                      onClick={onClick2}
                      className="text-white md:text-inherit text-base font-medium hover:opacity-80">
                      Prices
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </dh-component>
    </header>
  );
}

export default Header;
