import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
export const Services = () => {
  return (
    <Section>
      <div className="">
        <div className="md:mx-20 md:mb-32 mt-24 flex flex-col justify-center items-center text-center gap-4 md:p-12 p-4 border-dashed border-[10px] border-red-800">
          <div className="space-y-6 max-w-screen-md text-center">
          <h1>{copy.services.title}</h1>
          <p>{copy.services.p1}{copy.services.p2}</p>
          <p>{copy.services.p2}</p>
          </div>
          <div className="mt-10">
            <img src="/images/t800-coin.png" width={200} height={200} className="rounded-full"/>
          </div>
        </div>
      </div>
    </Section>
  );
};
