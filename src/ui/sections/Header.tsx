import React from "react";
import copy from "../../constants/copy";
import { MobieMenu } from "./MobiMenu";

export const Header = () => {
  return (
    <nav className="fixed z-50 top-0 w-full bg-black py-4 px-4 font-[family-name:var(--font-chakra-petch-bold)]">
      <div className=" rounded-md flex justify-between items-center px-6 ">
        <a className="" href="#hero">
          <h1 className="font-chakra-bold">T-800</h1>
        </a>
        <div className="">
          <ul className="hidden md:flex">
            {copy.nav.map((item, index) => {
              if (item.title === "Buy") {
                return (
                  <li
                    key={index}
                    className="border rounded-md border-gold px-4 py-1 "
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="px-4 py-1">
                    <a href={item.link}>{item.title}</a>
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
