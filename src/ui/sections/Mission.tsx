import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";

export const Mission = () => {
  return (
    <Section>
      <div className="w-full flex gap-8 justify-center items-center">
      <div>
        <Image
          src={copy.mission.image}
          alt={copy.mission.title}
          width={500}
          height={800}
        ></Image>
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <h1>{copy.mission.title}</h1>
        <p>{copy.mission.p1}</p>
        <p>{copy.mission.p2}</p>
      </div>
      
      </div>
    </Section>
  );
};
