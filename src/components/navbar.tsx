"use client";
import { useEffect, useState } from "react";
import Button from "./buttonLink";
import { HiOutlineMoon } from "react-icons/hi";
import { BiSun } from "react-icons/bi";
import Link from "next/link";

type ButtonsNav = {
  label: string
  route: string          
}

type NavbarProps = {
  buttonsNav: ButtonsNav[]
}

const handleScroll = (setHasScrolled: (value: boolean) => void) => {
  (window.scrollY > 0) 
  ? setHasScrolled(true)
  : setHasScrolled(false)
}

function Navbar({
    buttonsNav
}: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)
  const [darkMode, setDarkmode] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      handleScroll(setHasScrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`flex fixed top-0 left-0 w-full bg-gray-50 h-14 justify-end items-center
        ${hasScrolled ? "shadow-md" : ""} duration-500`}
    >
      <div className="flex w-[100%] ml-52 space-x-14">
      {buttonsNav && buttonsNav.map((buttons, key) => (
        <Link key={key} href={buttons.route}>
            <button 
              key={key}
              className="hover:text-amber-400 duration-300 hover:bg-slate-200"
            >
              {buttons.label}
            </button>
          
        </Link>
      ))} 
      </div>
      <div className="flex p-28 space-x-4">
        <button onClick={() => setDarkmode(!darkMode)}>
            {darkMode ? 
                <BiSun className="w-6 h-6 text-gray-600"/> : <HiOutlineMoon className="w-6 h-6 text-gray-600" />}
        </button>
        <Button label="Login" href="./login" />
      </div>
    </div>
  )
}

export default Navbar;
