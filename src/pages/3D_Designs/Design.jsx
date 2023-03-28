import React, { useState } from "react";
import footerBg from "../../components/Layout/Footer/images/footerBg.jpg";
import design from "..//images/3D.jpg";
import Modal from "./Modal";

const Design = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(true);
  }

  return (
    <section
      style={{ backgroundImage: `url(${footerBg})` }}
      className="pt-10 md:pt-40 md:pb-20 pb-10">
      <div className="mb-7">
        <h2 className="flex justify-center items-center text-center gap-3 mx-auto my-0 mt-10 text-2xl lg:text-5xl font-bold leading-10 text-white pb-4">
          3D <span className="font-thin">Designs</span>
        </h2>
        <hr className="w-28 h-1 mx-auto bg-purplee border-0 rounded md:my-3 dark:bg-gray-700"></hr>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5 mx-auto my-0 w-11/12 pb-10">
        <div>
          <button
            className="flex justify-center items-center galleryItem"
            type="button"
            onClick={() => {
              handleModal();
            }}>
            <div className="bg-black flex justify-center items-center group-hover:opacity-100 hover:brightness-125  hover:bg-purplee overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto py-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500 hover:shadow-2xl">
              <div className="flex justify-center items-center">
                <img alt="blog" src={design} className="opacity-60 " />
                <div className="inline-text">
                  <p>Chemical Production</p>
                  <p>3D animation</p>
                </div>
              </div>
            </div>
          </button>
          {showModal && <Modal setOpenModal={setShowModal} />}
        </div>
      </div>
    </section>
  );
};

export default Design;
