import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";

export const Mission = () => {
  return (
    <Section>
      <div className="w-full md:flex gap-8 justify-center items-center mt-32">
      <div>
        <Image
          src={copy.mission.image}
          alt={copy.mission.title}
          width={500}
          height={800}
        ></Image>
      </div>
      <div className="md:w-1/2 flex flex-col gap-8 mt-10 md:mt-0 px-4 md:px-0">
        <h1>{copy.mission.title}</h1>
        <p>{copy.mission.p1}</p>
        <p>{copy.mission.p2}</p>
      </div>
      
      </div>
    </Section>
  );
};
