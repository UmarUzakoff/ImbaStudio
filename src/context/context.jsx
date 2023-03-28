import React, { createContext, useState } from "react";
import wedding2 from "../pages/images/wedding2.jpg";
import wedding3 from "../pages/images/wedding3.jpg";
import wedding4 from "../pages/images/wedding4.jpg";
import wedding5 from "../pages/images/wedding5.jpg";
import wedding6 from "../pages/images/wedding6.jpg";
import wedding7 from "../pages/images/wedding7.jpg";
import wedding1 from "../pages/images/wedding1.jpg";

export const ContextMain = createContext({});

const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      url: "https://www.youtube.com/embed/UdBQaW1xEbI",
      img: wedding1,
      couples: "Bracha & Albert",
      text: "Wedding day",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/WUlwjSBS2KU",
      img: wedding2,
      couples: "Rivka & Joseph",
      text: "Wedding day",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/IyQasTULTuU",
      img: wedding3,
      couples: "Social film",
      text: "Trailer",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/ALad4ovPbDc",
      img: wedding4,
      couples: "Yidy",
      text: "Bar Mitzvah",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/5HNSUVQ29aE",
      img: wedding5,
      couples: "Social Film",
      text: "Bar Mitzvah",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/1NKtWTTB16M",
      img: wedding6,
      couples: "Levonah",
      text: "Bar Mitzvah",
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/ALad4ovPbDc",
      img: wedding7,
      couples: "Yonatan & Esther",
      text: "Wedding day",
    },
  ]);
  const data = {
    setVideos,
    videos,
  };

  return (
    <ContextMain.Provider value={{ data }}>{children}</ContextMain.Provider>
  );
};

export default ContextProvider;
