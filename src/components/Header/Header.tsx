"use client";
import { Link } from "@heroui/react";
import { Github } from "lucide-react";
import Menu from "./Menu";
import Logo from "../common/Logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const items = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Blogs",
      href: "#blogs",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const [fixedNav, setFixedNav] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 700) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  });
  return (
    <header
      className={`z-50  ${
        fixedNav &&
        "animate-nav_animate fixed top-0 left-0 right-0 bg-gradient-to-br from-zinc-900 to-stone-950"
      }`}
    >
      <div className="container relative py-6 flex-between ">
        <Logo />
        <div className="row-center gap-6 md:gap-12">
          <nav>
            <ul className="row-center max-md:hidden gap-6">
              {items.map((item, i) => (
                <Link
                  key={"nav_item_" + i}
                  color="foreground"
                  className="cursor-pointer relative after:content-[''] after:left-0 hover:after:left-auto after:transition-width after:h-[2px] after:absolute after:w-0 hover:after:w-full after:bg-white after:-bottom-1 "
                  href={item.href}
                >
                  <li>{item.label}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <Link
            color="foreground"
            href="https://github.com/GezerGoktug"
            target="_blank"
          >
            <div className="bg-gradient-to-bl from-foreground-100 to-stone-500 size-10 flex-center rounded-full outline-double outline-offset-2 outline-foreground-300">
              <Github />
            </div>
          </Link>
          <Menu />
        </div>
        {!fixedNav && (
          <div
            className={`absolute h-px  w-[calc(100vw-2rem)] md:w-full animate-mobile_progress md:animate-desktop_progress    an bg-gradient-to-r from-slate-600 to-zinc-700 bottom-0 shadow-[0_0_4px_2px_#d5d9dd60]`}
          />
        )}
      </div>
      {fixedNav && (
        <div
          className={`absolute h-px   left-0 w-full bg-gradient-to-r from-slate-600 to-zinc-700 bottom-0 shadow-[0_0_4px_2px_#d5d9dd60]`}
        />
      )}
    </header>
  );
};

export default Header;
