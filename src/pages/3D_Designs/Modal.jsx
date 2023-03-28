import React from "react";
import closeVid from "../images/closeVid.svg";

export default function Modal({ setOpenModal }) {
  return (
    <div className="fixed inset-0 z-10">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setOpenModal(false)}></div>
      <div className="flex items-center w-full min-h-screen">
        <div className="relative mx-auto my-0 bg-black rounded-md shadow-lg">
          <div className="sm:flex">
            <div className="text-center sm:py-10 pl-10 sm:text-left bg-black rounded-md">
              <iframe
                className="sm:w-96 pr-10 sm:pr-0 mt-60 sm:mt-0"
                height="300"
                src="https://www.youtube.com/embed/2O1TyJGXuWY"
                title="Chemical Etching: A Tour Through The Process (3D Animation)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
            <div
              className="w-10 h-96 bg-transparent rounded-md"
              onClick={() => setOpenModal(false)}>
              <img src={closeVid} alt="close" className="bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
