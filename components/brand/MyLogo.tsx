import React from "react";
import MySweetLogo from "@/public/brand/MySweetLogo.svg";
import MySweetLogoDark from "@/public/brand/MySweetLogoDark.svg";

import Image from "next/image";
import Link from "next/link";
const MyLogo = () => {
  return (
    <Link href={"/"}>
      <div className="group hidden md:flex  items-center gap-3">
        <div className=" translate-x-10 group-hover:translate-x-0 transition-all">
          <div className="font-heading font-bold dark:hidden">
            <Image width={25} alt="Logo" src={MySweetLogo} />
          </div>
          <div className="font-heading hidden font-bold dark:block">
            <Image width={25} alt="Logo" src={MySweetLogoDark} />
          </div>
        </div>
        <div className=" font-black font-heading text-2xl  translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
          EyeLow
        </div>
      </div>
      <div className="block md:hidden dark:hidden">
        <Image width={25} alt="Logo" src={MySweetLogo} />
      </div>
      <div className="block md:hidden ">
        <Image
          className="hidden dark:flex"
          width={25}
          alt="Logo"
          src={MySweetLogoDark}
        />
      </div>
    </Link>
  );
};

export default MyLogo;
