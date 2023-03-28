import React from "react";
import "./index.css";
import aboutBg from "../images/aboutBg.jpg";

const About = () => {
  return (
    <div
      className="about px-20 md:px-44 pb-28"
      id="about"
      style={{ backgroundImage: `url(${aboutBg})` }}>
      <a href="#about" aria-hidden="true">
        #
      </a>
      <div className="container">
        <h1 className="text-4xl font-medium text-start text-gray-500 mb-5">
          About US
        </h1>
        <hr className="hr" />

        <div className="flex justify-center flex-col items-center py-5">
          <p className="italic text-white text-xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our team has more than 6-7 years of
            video and photo editing experience, we offer the following services:
            Video editing of Wedding, Barmitzvah, Batmitzvah and Birthday events
            will include full video, highlight, feature film, social films.
          </p>
          <p className="text-white italic text-xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality is our main goal, if you are
            looking for a quality and fast video editing team, do not hesitate
            to contact us, we are pleased to work with you.
          </p>
        </div>
        <p className="text-white italic text-xl text-end font-semibold">
          Respectfully IMBA team!
        </p>

        <div
          className="flex justify-evenly my-5 flex-wrap text-white mt-10"
          id="feature-card">
          <div className="feature-card p-3 text-center ">
            <h5 className="font-semibold mb-2 text-2xl">Full Film</h5>
            <p className="text-sm">1-3 Hours</p>
          </div>
          <div className="feature-card p-3 text-center">
            <h5 className="font-semibold mb-2 text-2xl">Highlight</h5>
            <p className="text-sm">5-7 Minutes</p>
          </div>
          <div className="feature-card p-3 text-center">
            <h5 className="font-semibold mb-2 text-2xl">Social Film</h5>
            <p className="text-sm">1-2 Minutes</p>
          </div>
          <div className="feature-card p-3 text-center">
            <h5 className="font-semibold mb-2 text-2xl">Feature Film</h5>
            <p className="text-sm">10-30 Minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
