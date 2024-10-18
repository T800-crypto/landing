import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
export const Services = () => {
  return (
    <Section>
      <div className="">
        <div className="mx-20 mb-32 mt-20 flex flex-col justify-center items-center text-center gap-4 p-12 border-dashed border-[10px] border-red-800">
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
