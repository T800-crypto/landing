import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";

export const Hero = () => {
  return (
    <Section clasName={"relative w-full"}>
      <div className="h-screen md:h-[120%] w-full md:w-auto bg-center md:bg-top bg-[url('/images/t800-hero.png')] bg-cover backdrop-blur-md md:-right-[30%] md:-top-[20%] absolute left-0" />
      <div className="absolute w-screen md:w-[130%] h-screen top-0 left-0 bg-black bg-opacity-40 backdrop-blur-md " />
      {/* <div className="md:hidden flex justify-center bg-[url('/images/t800-hero.png')] bg-cover min-h-[360px]" /> */}
      <div
        className="w-full h-screen flex justify-center md:justify-none text-center md:text-left lg:mx-12"
        id="hero"
      >
        <div className="md:max-w-screen-md h-full mt-24 relative z-10">
          <div className="flex flex-col px-6 py-10 gap-8 h-full ">
            <div className="uppercase space-y-4">
              <h1 className="md:text-6xl">{copy.hero.title.split(":")[0]}</h1>
              <h2>{copy.hero.title.split(":")[1]}</h2>
            </div>
            <p className="md:text-xl">{copy.hero.p1}</p>
            <p className="md:text-xl">{copy.hero.p2}</p>
            <div className="grid grid-cols-2 md:flex items-center gap-4">
            <a href={copy.nav.find(e => e.title === "Buy")?.link || "#"} target="_blank">
            <button className="min-w-[120px] rounded-lg bg-red-600 border-2 border-red-600 hover:border-red-700 px-4 py-1.5 font-bold w-full md:w-fit transition duration-150 hover:bg-red-700 text-lg">
              Buy Now
            </button>
          </a>

          <a href={copy.nav.find(e => e.title === "Telegram")?.link || "#"} target="_blank">
          <button className="min-w-[120px] rounded-lg border-2 border-red-600 px-4 py-1.5 font-bold w-full md:w-fit transition duration-150 hover:border-red-700 hover:text-neutral-300 text-lg">
          Join Us
            </button>
          </a>
          </div>
          </div>
        </div>
        <div className="justify-end items-end w-full m-4 hidden md:flex z-10">
          {/* <p className="text-2xl font-bold text-red-600 font-chakra-bold">
            T-800
          </p> */}
        </div>
      </div>
    </Section>
  );
};
