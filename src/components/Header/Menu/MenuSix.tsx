"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuSix = () => {
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 40);
      // setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header-menu style-six ${fixedHeader ? "fixed" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="main flex items-center justify-between lg:h-20 h-16 py-4 px-7 rounded-full">
              <Link className="menu-left-block" href="/homepages/gsic">
                <Image
                  src={"/images/cii.png"}
                  width={1800}
                  height={1600}
                  alt="logo"
                  priority={true}
                  className="w-[149px] max-sm:w-[128px]"
                />
              </Link>
              <div className="menu-center-block h-full">
                <ul className="menu-nav flex items-center xl:gap-2 h-full">
                  <li
                    className={`nav-item text-white h-full flex items-center justify-center home ${
                      pathname === "/" || pathname.includes("/homepages/")
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      className="nav-link text-title flex items-center gap-1"
                      href="/homepages/gsic"
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li
                    className={`nav-item text-white h-full flex items-center justify-center ${
                      pathname.includes("/pages/pdfview") ? "active" : ""
                    }`}
                  >
                    <a
                      className="nav-link text-title flex items-center gap-1"
                      href="#!"
                    >
                      <span>Guide Book</span>
                      <span>
                        <Icon.CaretDown className="text-sm" />
                      </span>
                      <ul className="sub-nav">
                        <li
                          className={`sub-nav-item text-black ${
                            pathname === "/pages/" ? "active" : ""
                          }`}
                        >
                          {" "}
                          <Link
                            className="sub-nav-link font-medium"
                            href="/pages/pdfview"
                          >
                            View
                          </Link>
                        </li>
                        <li className={`sub-nav-item text-black`}>
                          {" "}
                          <a className="sub-nav-link font-medium" href="/pdf/gsic.pdf">
                            Download
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-right-block flex items-center">
                <a
                  href="https://registration.citainovasi.com"
                  target="_blank"
                  className="max-lg:hidden button-main bg-orange text-white rounded-full hover:bg-black"
                >
                  Register Now
                </a>
                <div
                  className="menu-humburger hidden pointer"
                  onClick={() => setOpenMenuMobile(!openMenuMobile)}
                >
                  <Icon.List className="text-2xl text-white" weight="bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-mobile-block" className={`${openMenuMobile && "open"}`}>
          <div className="menu-mobile-main text-white">
            <div className="container">
              <div className="close-btn py-5 flex items-center justify-end">
                <Icon.X
                  weight="bold"
                  className="text-white text-2xl"
                  onClick={() => setOpenMenuMobile(false)}
                />
              </div>
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${
                    openSubNavMobile === 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(1)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">Home </span>
                  </a>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${
                    openSubNavMobile === 2 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(2)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">Guide Book </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 2 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href="/pages/pdfview"
                      >
                        View
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      {" "}
                      <Link className="sub-nav-link text-base" href="#!">
                        Download
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${
                    openSubNavMobile === 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(1)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="https://registration.citainovasi.com"
                    target="_blank"
                  >
                    <span className="body2 font-semibold">Register Now </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuSix;
