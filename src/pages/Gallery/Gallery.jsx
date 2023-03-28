import React, { useState } from "react";
import { useContext } from "react";
import { ContextMain } from "../../context/context";
import footerBg from "../../components/Layout/Footer/images/footerBg.jpg";
import Modal from "./Modal";
import Button from ".././../components/Button/Button";

const Gallery = () => {
  const { data } = useContext(ContextMain);
  const { videos } = data;

  const [showModal, setShowModal] = useState(false);
  const [displayData, setDisplayData] = useState();

  function handleModal(el) {
    setShowModal(true);
    setDisplayData(el);
  }

  return (
    <section
      style={{ backgroundImage: `url(${footerBg})` }}
      className="pt-10 md:pt-20 md:pb-20 pb-10">
      <div className="mb-7">
        <h2 className="flex justify-center items-center text-center gap-3 mx-auto my-0 mt-10 text-2xl lg:text-5xl font-bold leading-10 text-white pb-4">
          Video <span className="font-thin">Gallery</span>
        </h2>
        <hr className="w-28 h-1 mx-auto bg-purplee border-0 rounded md:my-3 dark:bg-gray-700"></hr>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5 mx-auto my-0 w-11/12 pb-10">
        {videos.map((el) => (
          <div key={el.id}>
            <button
              className="flex justify-center items-center"
              type="button"
              onClick={() => {
                handleModal(el);
              }}>
              <div className="bg-black flex justify-center items-center group-hover:opacity-100 hover:brightness-125  hover:bg-purplee overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto py-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500 hover:shadow-2xl">
                <div className="flex justify-center items-center">
                  <img alt="blog" src={el.img} className="opacity-80 " />
                </div>
              </div>
            </button>
            {showModal && (
              <Modal setOpenModal={setShowModal} displayData={displayData} />
            )}
          </div>
        ))}
      </div>
      <Button link="/Gallery" text="Load More" />
    </section>
  );
};

export default Gallery;
