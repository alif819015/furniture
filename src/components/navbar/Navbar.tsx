"use client";

import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="bg-white ">
      <div
        className={` flex min-h-[100px] lg:min-h-[122px]  items-center justify-between lg:px-[100px] px-[30px] xl:px-[122px] mx-auto `}
      >
        <div>
          <p className="text-[#054C73] text-[34px] font-[700]">Furniture</p>
        </div>
        <div
          className={`lg:static absolute z-[9999] bg-white  min-h-[40vh] lg:min-h-fit left-0 w-full lg:w-auto  top-[-100%] flex items-center  ${
            open && "top-[9%]  transition-transform duration-1000"
          }`}
        >
          <ul className="flex px-10 lg:px-0 lg:flex-row flex-col lg:items-center text-[16px] font-[600] text-[#333] lg:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500 cursor-pointer"> Home</a>
            </li>
            <li>
              <a className="hover:text-gray-500  cursor-pointer"> Services </a>
            </li>
            <li>
              <a className="hover:text-gray-500 cursor-pointer"> Doctors</a>
            </li>
            <li>
              <a className="hover:text-gray-500 cursor-pointer"> Products</a>
            </li>
            <li>
              <a className="hover:text-gray-500 cursor-pointer"> Gallery</a>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden items-center gap-6">
          {open ? (
            <IoCloseSharp
              onClick={() => setOpen(!open)}
              className={`text-4xl cursor-pointer lg:hidden `}
            />
          ) : (
            <IoMenuSharp
              onClick={() => setOpen(!open)}
              className={`text-4xl cursor-pointer lg:hidden `}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
