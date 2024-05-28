"use client";

import Nav from "react-bootstrap/Nav";
import style from "./header.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({val}) {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  });

  return (
    <>
    <div className={`${style["outerdiv"]} ${style[`${val?"theme1":""}`]}`}>
      <Nav justify variant="tabs" className={`${val?style["Navdark"]:style["Navlight"]}`}>
        <Nav.Item >
          <Nav.Link
            as={Link}
            href="/"
            // className={style["header-nav-link"]}
            active={currentPath === "/"}
          >
            {/* <BiSolidHomeCircle className={style["icons"]} /> */}
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item  >
          <Nav.Link
            as={Link}
            href="/adminpanel"
            // className={style["header-nav-link"]}
            active={currentPath === "/adminpanel"}
          >
            {/* <BiSolidHomeCircle className={style["icons"]} /> */}
            Admin Panel
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      
    </>
  );
}



