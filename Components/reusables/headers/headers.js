"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./headers.module.scss";
export default function ExampleHeaders() {
  const router = usePathname();
  return (
    <>
      <div className={style["header-links"]}>
        <Link
          href="/"
          className={style[`${router === "/" ? "headerActive" : ""}`]}
        >
          Home
        </Link>

        <Link
          className={style[`${router === "/test" ? "headerActive" : ""}`]}
          href="/test"
        >
          Test
        </Link>

        <Link
          href="/food"
          className={style[`${router === "/food" ? "headerActive" : ""}`]}
        >
          Food
        </Link>
      </div>
      <div className={style["description"]}>
        Here we have a custom header without using any third-party library, in which when we select the link, the selected link becomes bold. We can further modify and reuse it as per our requirements.
      </div>
    </>
  );
}
