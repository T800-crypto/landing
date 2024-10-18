import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";

export const Services = () => {
  return (
    <Section>
      <div className="">
        <div className="mx-20 flex flex-col justify-center items-center text-center gap-4 p-12 border-dashed border-[10px] mb-12 border-red-800">
          <h1>{copy.services.title}</h1>
          <p>{copy.services.p1}</p>
          <p>{copy.services.p2}</p>
        </div>
        {/* <div className="flex">
          <Image
            src={copy.services.image}
            alt={copy.services.title}
            width={500}
            height={600}
          ></Image>
          <Image
            src={copy.services.image}
            alt={copy.services.title}
            width={500}
            height={600}
          ></Image>
          <Image
            src={copy.services.image}
            alt={copy.services.title}
            width={500}
            height={600}
          ></Image>
        </div> */}
      </div>
    </Section>
  );
};
