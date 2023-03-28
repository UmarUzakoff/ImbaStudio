import React from "react";
import heroBg from "../images/heroBg.jpg";
import Button from ".././../components/Button/Button";

function Hero() {
  return (
    <div
      className="bg-gray-100 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <p className="pt-28 sm:mt-10 lg:w-3/5 text-white font-normal text-center text-sm sm:text-lg mb-5">
            Looking for FAST, CREATIVE, and CINEMATIC VIDEO EDITING? <br />
            Search no more! This is the right place for you!
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
            We are PROFESSIONAL <br /> VIDEO and PHOTO editing team
          </h1>
        </div>
        <Button link="mailto: workimba@gmail.com" text="CONTACT US" />
      </div>
    </div>
  );
}

export default Hero;
