import React from "react";
import copy from "../../constants/copy";


export const Header = () => {
  return (
    <nav className="fixed z-50 w-full bg-black py-4 px-6 font-[family-name:var(--font-chakra-petch-bold)]">
      <div className=" rounded-md flex justify-between items-center px-6 ">
      <div>
        <h1 className="font-chakra-bold">T-800</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          {copy.nav.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
          </svg>
        </a>
      </div>
      </div>
    </nav>
  );
};
