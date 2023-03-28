import React from "react";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import InstagramPosts from "../InstaPosts/InstagramPosts";
import PriceCalc from "../PriceCalculator/WeddingCalculator";

function Home() {
  return (
    <section className="bg-gray-100 overflow-y-hidden">
      <Hero />
      <Gallery />
      <About />
      <InstagramPosts />
      <PriceCalc/>
    </section>
  );
}

export default Home;
