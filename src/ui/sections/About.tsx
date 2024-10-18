import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";

export const About = () => {
  return (
    <Section clasName="px-32 mt-32 mb-20">
      <div className="flex mx-auto min-h-[600px]">
        <div className="w-1/2">
          {" "}
          <h1>{copy.about.title}</h1>
          <p>{copy.about.p1}</p>
          <p>{copy.about.p2}</p>
        </div>
        <div className="relative w-1/2 flex items-center justify-center">
          <div className="absolute inset-0 border-[20px] border-black filter blur-lg rounded-full"></div>
          <div className="pl-20">
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
