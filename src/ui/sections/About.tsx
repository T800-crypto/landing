import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";

export const About = () => {
  return (
    <Section clasName="md:px-32 px-4 mt-44 mb-20">
      <div className="flex flex-col-reverse md:flex-row md:mx-auto md:min-h-[600px]">
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          {" "}
          <h1>{copy.about.title}</h1>
          <p>{copy.about.p1}</p>
          <p>{copy.about.p2}</p>
        </div>
        <div className="relative md:w-1/2 flex items-center justify-center">
          <div className="absolute inset-0 border-[20px] border-black filter blur-lg rounded-full"></div>
          <div className="md:pl-20">
            <Image
              src={copy.about.image}
              alt={copy.about.title}
              width={500}
              height={500}
              className="rounded-full"
            ></Image>
          </div>
        </div>
      </div>
    </Section>
  );
};
