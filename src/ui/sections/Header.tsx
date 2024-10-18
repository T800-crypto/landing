"use client"

import React, { useEffect } from "react";
import copy from "../../constants/copy";
import { MobieMenu } from "./MobiMenu";
import useWindowScroll from "@/hooks/use-window-scroll";

export const Header = () => {
  const { scrollY } = useWindowScroll();
  
  useEffect(() => {
    if(scrollY && typeof window !== undefined) {
      const el = document.getElementById('navbar');
      if(el) {
        if (scrollY > 50) {
          el.style.backgroundColor = "black";
        } else {
          el.style.backgroundColor = "transparent";
        }
      }
    }
  }, [scrollY])

  return (
    <nav id="navbar" className="transition duration-300 fixed z-50 top-0 w-full  py-4 px-2 md:px-4 font-[family-name:var(--font-chakra-petch-bold)] text-white">
      <div className=" rounded-md flex justify-between items-center px-3 md:px-4 ">
        <a className="" href="#hero">
          <h3 className="font-chakra-bold">Terminator</h3>
        </a>
        <div className="">
          <ul className="hidden md:flex">
            {copy.nav.map((item, index) => {
              if (item.title === "Buy") {
                return (
                  <li
                    key={`header-link-${index}`}
                    
                  >
                    <a href={item.link} target={item.target}>
                    <div className="border rounded-md border-gold px-4 py-1 ml-2 transition duration-150 hover:opacity-90">
                      {item.title}
                      </div>
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={`header-link-${index}`}>
                    <a href={item.link} target={item.target}>
                      <div className="px-4 py-1 transition duration-150 hover:opacity-90">
                        {item.title}
                      </div>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          <div className="md:hidden">
            <MobieMenu items={copy.nav} />
          </div>
        </div>
      </div>
    </nav>
  );
};
