"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/use-window-size";

// interfaces
interface IDashboardItem {
  title: string;
  link: string;
}

interface IDashboardLayout {
  items: Array<IDashboardItem>;
  openBanner?: boolean;
  type?: "miners" | "default";
}

// styles
const baseClassName = `group rounded flex p-2 transition duration-150 w-full text-md`;

// functional component
export const MobieMenu = ({
  items,
}: IDashboardLayout) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width, breakpoints } = useWindowSize();

  useEffect(() => {
    if (isMobileMenuOpen) {
      if (width > breakpoints.sm) {
        setIsMobileMenuOpen(false);
      }
    }
  }, [width, isMobileMenuOpen]);

  return (
    <Fragment>
      <div className="relative">
        <div className="">
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=""
          >
            <span className="mr-2 text-[12px] text-white">MENU</span>
          </button>
        </div>
      </div>
      <div
        className={!isMobileMenuOpen? "hidden": "z-99 fixed right-0 top-0 h-[100%] w-full bg-black opacity-10"}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      ></div>
      <aside
        id="default-sidebar"
        className={`
          fixed left-0 top-0 z-40 h-screen w-48 -translate-x-full shadow-sm transition-transform sm:translate-x-0 md:w-56 lg:w-60 2xl:w-64 ${
            isMobileMenuOpen
              ? "!w-64 !translate-x-0 !shadow-lg !shadow-neutral-300 dark:!shadow-brand-offblack"
              : undefined
          }`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-neutral-50 px-3 py-5 dark:bg-neutral-800">
          <div className="flex h-full flex-col gap-6">
            <div className="flex justify-between">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 50 50"
                  width="15px"
                  height="15px"
                >
                  <line
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    x1="7"
                    y1="7"
                    x2="43"
                    y2="43"
                  />
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    x1="43"
                    y1="7"
                    x2="7"
                    y2="43"
                  />
                </svg>
              </button>
            </div>
            <div className="flex h-full flex-col justify-between gap-4">
              <ul className="space-y-1.5">
                {items.map((item, i) => {
                  return (
                    <li key={`dashboard-items-${item.link}-${i}`}>
                      <a href={item.link} className="">{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};
