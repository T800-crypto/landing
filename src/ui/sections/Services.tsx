import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";
export const Services = () => {
  return (
    <Section>
      <div className="">
        <div className="md:mx-20 md:mb-32 mt-20 flex flex-col justify-center items-center text-center gap-4 md:p-12 p-6 border-dashed border-[10px] border-red-800">
          <div>
          <h1>{copy.services.title}</h1>
          <p>{copy.services.p1}</p>
          <p>{copy.services.p2}</p>
          </div>
          <div className="md:mt-20 mt-10">
            <Image src="/images/t800-coin.png" width={200} height={200} alt="terminator coin" className="rounded-full"/>
          </div>
        </div>
      </div>
    </Section>
  );
};
