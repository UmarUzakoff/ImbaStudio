import React, { useState } from "react";

const filmTypes = [
  {
    label: "Full film",
    duration: "(1-3 hours)",
  },
  {
    label: "Highlight",
    duration: "(5-7 minutes)",
  },
  {
    label: "Social film",
    duration: "(1-2 minutes)",
  },
  {
    label: "Feature film",
    duration: "(10-30 minutes)",
  },
];

const PriceCalc = () => {
  const [total, setTotal] = useState(0);
  const [checkedFilms, setCheckedFilms] = useState([]);

  const discount = (total * 1) / 3;

  const asd = total - discount;

  Math.round(total);

  const chooseFilm = (element) => {
    const value = element.value;
    switch (value) {
      case "fullFilm":
        if (element.checked) {
          setTotal((prev) => prev + 120);
          setCheckedFilms([...checkedFilms, { type: "fullFilm" }]);
        } else {
          setTotal((prev) => prev - 120);
        }
        break;
      case "highlight":
        if (element.checked) {
          setTotal((prev) => prev + 120);
          setCheckedFilms([...checkedFilms, { type: "highlight" }]);
        } else {
          setTotal((prev) => prev - 120);
        }
        break;
      case "socialFilm":
        if (element.checked) {
          setTotal((prev) => prev + 60);
          setCheckedFilms([...checkedFilms, { type: "socialFilm" }]);
        } else {
          setTotal((prev) => prev - 60);
        }
        break;
      case "featureFilm":
        if (element.checked) {
          setTotal((prev) => prev + 120);
          setCheckedFilms([...checkedFilms, { type: "featureFilm" }]);
        } else {
          setTotal((prev) => prev - 120);
        }
        break;
      default:
        break;
    }
    if (element.id === "cameras") {
      if (element.value === "one") {
        setTotal((prev) => Math.round(prev * 1));
      }
      if (element.value === "two") {
        setTotal((prev) => Math.round(prev * 1.5));
      }
      if (element.value === "three") {
        setTotal((prev) => Math.round(prev * 1.8));
      }
      if (element.value === "four") {
        setTotal((prev) => Math.round(prev * 2.1));
      }
    }
  };

  return (
    <div className="px-5 sm:px-32 pb-20 sm:pb-10 pt-5 sm:pt-20 mx-auto bg-[#eee]" id="price">
      <div className="mb-7">
        <a href="#price" aria-hidden="true" className="hidden">
          #
        </a>
        <h2 className="flex justify-center items-center text-center gap-3 mx-auto my-0 mt-10 text-2xl lg:text-4xl font-bold leading-10 text-black pb-4">
          Price <span className="font-thin">Calculator</span>
        </h2>
        <hr className="w-28 h-1 mx-auto bg-purplee border-0 rounded md:my-3 dark:bg-gray-700"></hr>
      </div>
      <form
        onChange={(e) => chooseFilm(e.target)}
        className="bodyPart w-full border border-solid border-gray-300 p-4">
        <div className="w-full border border-solid border-gray-300 p-4">
          <p>Event type</p>
          <form className="flex sm:gap-5 sm:flex-row flex-col gap-2 items-start">
            <div className="flex justify-center items-center">
              <input
                className="appearance-none"
                type="radio"
                checked
                value="wedding"
                name="select"
                id="select1"
              />
              <label htmlFor="select1" className="inline-block ">
                <div className="outer_border border-solid bg-[#ddd] border-gray-300  h-10 w-32 mt-2 border flex justify-center rounded-lg  transition-all cursor-pointer items-center">
                  <p className="mr-2 text-sm">Wedding</p>
                  <span className="inner_circle relative h-5 w-5 rounded-full border flex focus:bg-blue-700"></span>
                </div>
              </label>
            </div>
            <div className="flex justify-center items-center">
              <input
                className="appearance-none form-check-input"
                type="radio"
                value="barMitzvah"
                name="select"
                id="select2"
              />
              <label htmlFor="select2">
                <div className="outer_border border-solid bg-[#ddd] border-gray-300  h-10 w-32 mt-2 border flex justify-center rounded-lg focus:border-blue-700 transition-all cursor-pointer items-center">
                  <p className="mr-2 text-sm">Bar Mitzvah</p>
                  <span className="inner_circle relative h-5 w-5 rounded-full border flex focus:bg-blue-700"></span>
                </div>
              </label>
            </div>
          </form>
        </div>
        <ul className="mt-2 w-full text-sm font-medium text-gray-900 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {filmTypes.map((el) => (
            <li
              key={el.label}
              className="w-full border-b border-gray-300 dark:border-gray-600 hover:bg-stone-300">
              <div className="flex items-center pl-3">
                <input
                  id={el.label}
                  type="checkbox"
                  value={el.label}
                  className="w-4 h-4 mx-1 text-blue-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-400 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={el.label}
                  className="w-full py-3 ml-3 text-lg font-medium text-gray-900 dark:text-gray-300 border-l border-solid border-gray-300 pl-2">
                  {el.label} <span className="text-xs">{el.duration}</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 w-full border border-solid border-gray-300 p-4">
          <p>Video resolution:</p>
          <form className="flex sm:gap-5 sm:flex-row flex-col gap-2 items-start">
            <div className="flex justify-center items-center">
              <input
                className="appearance-none"
                type="radio"
                checked
                name="select"
                id="select3"
              />
              <label htmlFor="select3" className="inline-block ">
                <div className=" outer_border border-solid bg-[#ddd] border-gray-300  h-10 w-40 mt-2 border flex justify-center rounded-lg  transition-all cursor-pointer items-center">
                  <p className="mr-2 text-sm">
                    Full HD <span className="text-xs">(1080p)</span>
                  </p>
                  <span className="inner_circle relative h-5 w-5 rounded-full border flex focus:bg-blue-700"></span>
                </div>
              </label>
            </div>
            <div className="flex justify-center items-center">
              <input
                className="appearance-none form-check-input"
                type="radio"
                name="select"
                id="select4"
              />
              <label htmlFor="select4">
                <div className="outer_border border-solid bg-[#ddd] border-gray-300  h-10 w-40 sm:w-32 mt-2 border flex justify-center rounded-lg focus:border-blue-700 transition-all cursor-pointer items-center">
                  <p className="mr-2 text-sm">
                    4K <span className="text-xs">(2160p)</span>{" "}
                  </p>
                  <span className="inner_circle relative h-5 w-5 rounded-full border flex focus:bg-blue-700"></span>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="flex items-center gap-5 mt-4 w-full border border-solid border-gray-300 p-2">
          <p className="sm:text-xl text-base">How many cameras worked</p>
          <select
            name=""
            id="cameras"
            className="text-lg w-40 p-1.5 rounded-xl">
            <option defaultValue="one">1 Camera</option>
            <option value="two">2 Camera</option>
            <option value="three">3 Camera</option>
            <option value="four">4 Camera</option>
          </select>
        </div>
        <div className="mt-4 w-full py-4 px-2">
          {}
          <div>
            <p className="text-red-600 text-lg">
              Without discount: $<span className="line-through">{total}</span>
            </p>
            <p className="text-green-500 text-lg my-2">Discount $ {discount}</p>
          </div>
          <form className="flex sm:items-center sm:flex-row sm:justify-between flex-col gap-3 items-start">
            <h3 className="text-4xl text-blue-600 font-bold">Total: {asd}</h3>
            <button className="bg-violet-900 relative sm:bottom-10 px-8 py-2 rounded-md font-bold text-lg text-white hover:bg-violet-200 hover:text-violet-900">
              Order Now
            </button>
          </form>
        </div>
      </form>
    </div>
  );
};

export default PriceCalc;
