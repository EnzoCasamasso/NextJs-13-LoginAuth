import Button from "./buttonLink";

import { HiOutlineMoon } from "react-icons/hi"

export default function Navbar() {
    return (
        <div className="flex shadow-md h-14 justify-end items-center">
            <div className="flex w-[100%] m-10 space-x-10">
                <button className="text-white hover:text-green-400 duration-300">Home</button>
                <button className="text-white hover:text-green-400 duration-300">Sobre</button>
            </div>
            <div className="flex p-36 space-x-4">
                <button>
                    <HiOutlineMoon className="w-6 h-6 text-gray-300"/>
                </button>
                
                <Button label="Login" href="./login"/>
            </div>

        </div>
    )
}