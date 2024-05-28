"use client";
import Image from "next/image";
import { useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RiPagesLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

import style from "./adminpanel.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDropdown } from "react-bootstrap";
export default function AdminPanel() {
  const [showSidebar, setshowSidebar] = useState(false);
  const [bgcolor, setBgcolor] = useState(false);
  const router = usePathname();
  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  const handleBgcolor = () => {
    setBgcolor(!bgcolor);
  };
  return (
    <>
      <div
        className={`${style[`outerdiv`]} ${
          style[`${bgcolor ? "theme1" : ""}`]
        }`}
      >
        <div
          className={`${style[`sidebar`]}  ${
            style[`${showSidebar ? "sidebaropen" : "sidebarclose"}`]
          } `}
        >
          <div className={style["sidebar-backdrop-div"]}>
            
              <div className={style["tailsboard-div"]}>
              <Link href="/adminpanel">
                <p>tailsBoard</p>
                </Link>
                <button onClick={handleSidebar}>
                  <AiOutlineClose />
                </button>
                
              </div>
            
            <div
              className={`${bgcolor ? style["Navdark"] : style["Navlight"]}`}
            >
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/dashboard"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/dashboard">
                  <BiSolidDashboard className={style["sidebar-icons"]} />
                  Dashboard
                </Link>
              </div>
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/leads"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/leads">
                  <MdOutlineLeaderboard className={style["sidebar-icons"]} />
                  Leads
                </Link>
              </div>
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/transactions"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/transactions">
                  <BiTransfer className={style["sidebar-icons"]} />
                  transactions
                </Link>
              </div>
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/analytics"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/analytics">
                  <TbBrandGoogleAnalytics className={style["sidebar-icons"]} />
                  Analytics
                </Link>
              </div>
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/integration"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/integration">
                  <MdOutlineIntegrationInstructions
                    className={style["sidebar-icons"]}
                  />
                  Integration
                </Link>
              </div>
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/calender"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/calender">
                  <SlCalender className={style["sidebar-icons"]} />
                  Calender
                </Link>
              </div>
              
              <NavDropdown
              title={
                <span>
                  <RiPagesLine className={style["sidebar-icons"]} />Pages
                </span>
              }
              className={`${style["sidebar-items"]} ${style["navdropdown"]}`}
            >
              <NavDropdown.Item href="/adminpanel/pages/landingpage"
              active={router==="/adminpanel/pages/landingpage"}
              >
                LandingPage
              </NavDropdown.Item>
              <NavDropdown.Item  >Another action</NavDropdown.Item>
              <NavDropdown.Item >
                Something else here
              </NavDropdown.Item>
             
            </NavDropdown>

              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/settings"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/settings">
                  <FiSettings className={style["sidebar-icons"]} />
                  Settings
                </Link>
              </div>
              <div
                className={`${style["sidebar-items"]} ${
                  style[
                    `${
                      router === "/adminpanel/documentation"
                        ? "sidebar-items-active"
                        : ""
                    }`
                  ]
                }`}
              >
                <Link href="/adminpanel/documentation">
                  <HiOutlineDocumentAdd className={style["sidebar-icons"]} />
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style["content"]}>
          <div className={style["content-topbar"]}>
            <div className={style["content-topbar-left"]}>
              <button onClick={handleSidebar}>
                <BsLayoutTextSidebarReverse />
              </button>
            </div>
            <div className={style["content-topbar-right"]}>
              {bgcolor === true && (
                <button
                  className={style["sun-icon"]}
                  onClick={() => {
                    handleBgcolor();
                  }}
                >
                  <BsSun />
                </button>
              )}
              {bgcolor === false && (
                <button
                  className={style["moon-icon"]}
                  onClick={() => {
                    handleBgcolor();
                  }}
                >
                  <BiMoon />
                </button>
              )}
              <button className={style["bell-icon"]}>
                <BsBell />
              </button>
              <button className={style["messages-icon"]}>
                <LuMessagesSquare />
              </button>

              <Image
                src="/img1.jpg"
                alt="..."
                width={1000}
                height={1200}
                className={style["content-topbar-image"]}
              ></Image>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
