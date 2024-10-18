import React from "react";
import { Section } from "@/ui/components/Section";
import copy from "@/constants/copy";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section clasName={"relative w-full mt-20"}>
        <div className="w-full h-full flex min-h-[600px]">
          <div className="w-2/3 bg-[url('/images/t800-hero.png')] bg-cover flex justify-center items-start">
            <h1 className="text-[100px] mt-16 text-red-600 font-chakra-bold">T-800</h1>
          </div>
          <div className="bg-black w-1/3 h-full">
            <div className="flex flex-col px-6 py-10 gap-8">
              <h1>{copy.hero.title}</h1>
              <p>{copy.hero.p1}</p>
              <p>{copy.hero.p2}</p>
            </div>
          </div>
        </div>
   
    </Section>
  );
};
