import CreatePost from "@/components/Blockscomps/facebook/CreatePost";
import NavigationBar from "@/components/Blockscomps/facebook/NavigationBar";
import Post from "@/components/Blockscomps/facebook/Post";
import SideBar from "@/components/Blockscomps/facebook/SideBar";
import SideBarRight from "@/components/Blockscomps/facebook/SideBarRight";
import React from "react";

const Facebookpage = () => {
  return (
    <div className="mt-36">
      <div className="container flex flex-col items-center justify-center border border-accent/20 rounded-md p-5 ">
        <div className="w-full ">
          <NavigationBar />
        </div>
        <div className="w-full flex justify-between   bg-slate-100 ">
          <div className="w-[25%] ">
            <SideBar />
          </div>
          <div className="w-[50%] mt-6">
            {/* feed */}
            <CreatePost />
            <div className="mt-5">
              <Post />
            </div>
          </div>
          <div className="w-[25%] ">
            <SideBarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebookpage;
