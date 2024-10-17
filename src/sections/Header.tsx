import React from "react";
import copy from "../constants/copy";
import Image from "next/image";

export const Header = () => {
  return (
    <nav>
      <div className="w-full flex justify-bewteen items-center">
        <div>
          <Image
            src={copy.hero.image}
            alt={copy.hero.title}
            width={50}
            height={50}
          ></Image>
        </div>
        <div>
          <ul>
            {copy.nav.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
