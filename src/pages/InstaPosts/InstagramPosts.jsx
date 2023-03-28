import React from "react";
import { Card } from "@material-tailwind/react";
import footerBg from "../../components/Layout/Footer/images/footerBg.jpg";
import post1 from "../images/1.jpg";
import post2 from "../images/2.jpg";
import post3 from "../images/3.jpg";
import post4 from "../images/4.jpg";
import Button from ".././../components/Button/Button";

export default function InstagramPosts() {
  return (
    <section
      className="pt-10 md:pt-20 md:pb-20 pb-10"
      style={{ backgroundImage: `url(${footerBg})` }}>
      <div>
        <h2 className="flex justify-center items-center text-center gap-3 mx-auto my-0 text-2xl lg:text-5xl font-bold leading-10 text-white pb-4">
          Instagram <span className="font-thin">Posts</span>
        </h2>
        <hr className="w-28 h-1 mx-auto bg-purplee border-0 rounded md:my-3 dark:bg-gray-700"></hr>
      </div>
      <div className="flex flex-wrap gap-6 justify-center py-10">
        <Card
          shadow={false}
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200
          relative grid h-[20rem] w-full max-w-[20rem] items-center justify-center overflow-hidden rounded-3xl">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            <img src={post1} alt="instaPost" />
          </div>
        </Card>
        <Card
          shadow={false}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 rounded-3xl relative grid h-[20rem] w-full max-w-[20rem] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            <img src={post2} alt="instaPost" />
          </div>
        </Card>
        <Card
          shadow={false}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 rounded-3xl relative grid h-[20rem] w-full max-w-[20rem] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            <img src={post3} alt="instaPost" />
          </div>
        </Card>
        <Card
          shadow={false}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 rounded-3xl relative grid h-[20rem] w-full max-w-[20rem] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            <img src={post4} alt="instaPost" />
          </div>
        </Card>
      </div>
      <Button
        link="https://www.instagram.com/imba_studio/"
        text="Contact us via Instagram"
      />
    </section>
  );
}
