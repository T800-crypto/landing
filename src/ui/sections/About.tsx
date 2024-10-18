import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";

export const About = () => {
  return (
    <Section clasName="md:px-32 px-4 mt-44 mb-20 md:mb-44">
      <div className="flex flex-col-reverse md:flex-row md:mx-auto ">
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 space-y-6">
          {" "}
          <h1>{copy.about.title}</h1>
          <p>{copy.about.p1}</p>
          <p>{copy.about.p2}</p>
        </div>
        <div className="relative md:w-1/2 flex items-center justify-center">
          <div className="md:pl-20">
            <img
              src={copy.about.image}
              alt={copy.about.title}
              width={400}
              height={400}
              className="rounded-full shadow shadow-black"
            ></img>
          </div>
        </div>
      </div>
    </Section>
  );
};
