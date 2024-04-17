import React from "react";
import MyButton from "../Myui/MyButton";
import { ArrowRight, Codesandbox, Info } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] py-52 h-screen overflow-hidden  flex flex-col justify-center items-center relative">
      <div className="relative z-10">
        <Link href={"/"}>
          <div className="text-xs mx-auto flex items-center gap-2 hover:-translate-y-0.5 transition-all  bg-accent text-slate-50 w-fit px-7 py-1 hover:opacity-80 rounded-full border border-black/10">
            See Whats New!!
            <div>
              <ArrowRight size={10} />
            </div>
          </div>
        </Link>
        <div className="text-7xl mt-5  font-heading font-bold max-w-2xl text-center">
          Use <span className="text-accent">Shadcn/ui</span> Wisely And Make the
          Unmakeable.
        </div>
        <div className="flex justify-center items-center mt-7">
          <MyButton text="Blocks">
            <Codesandbox size={15} />
          </MyButton>
          <MyButton variant="link" text="Know About us">
            <Info size={15} />
          </MyButton>
        </div>
      </div>
      <div className="mt-8 relative z-20 flex items-center gap-2">
        <img className=" dark:invert" src="/brand/MySweetLogo.svg" alt="" />
        <img className=" dark:invert" src="/brand/funny-monster.svg" alt="" />
      </div>
      <div className=" bg-gradient-to-t from-background to-transparent w-full h-full  absolute top-0 left-0"></div>
    </div>
  );
};

export default HeroSection;
