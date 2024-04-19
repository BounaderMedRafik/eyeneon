import { Ellipsis, Globe, X } from "lucide-react";
import React from "react";
import { FacebookButton } from "./ui/FacebookButton";

const username = "Bounader Med Rafik";
const PostDesc = "i know the chemistry you know the business";
const smallMessage = "updated his profile picture";
const Post = () => {
  return (
    <div className="w-full p-5 bg-white shadow rounded-md border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="h-9 w-9 object-cover rounded-full"
            src="https://source.unsplash.com/random/666"
            alt=""
          />
          <div>
            <div className="text-sm font-semibold flex items-center gap-2 text-slate-700">
              {username}
              <div className="text-xs font-light">{smallMessage}</div>
            </div>
            <div className="flex text-xs items-center gap-1 text-slate-500">
              <div>4h • </div>
              <Globe size={10} />
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <FacebookButton size={"icon"} variant={"MiddleNav"}>
            <Ellipsis size={25} />
          </FacebookButton>
          <FacebookButton size={"icon"} variant={"MiddleNav"}>
            <X size={25} />
          </FacebookButton>
        </div>
      </div>
      <div className="">
        <div className="text-sm my-2">{PostDesc}</div>
        <img
          className="w-full h-96 object-cover rounded-md"
          src="https://source.unsplash.com/random/666"
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
