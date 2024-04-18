import NavigationBar from "@/components/Blockscomps/facebook/NavigationBar";
import SideBar from "@/components/Blockscomps/facebook/SideBar";
import SideBarRight from "@/components/Blockscomps/facebook/SideBarRight";
import React from "react";

const page = () => {
  return (
    <div className="mt-36">
      <div className="container flex flex-col items-center justify-center border border-accent/20 rounded-md p-5 ">
        <div className="w-full ">
          <NavigationBar />
        </div>
        <div className="w-full flex justify-between   bg-slate-100 ">
          <div className="w-[25%] border-r border-black ">
            <SideBar />
          </div>
          <div className="w-[25%] border-l border-l-black">
            <SideBarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
