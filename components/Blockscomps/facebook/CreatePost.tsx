import { ImageUp, Laugh, User, Video } from "lucide-react";
import React from "react";
import { FacebookInput } from "./ui/FacebookInput";
import { FacebookButton } from "./ui/FacebookButton";

const bottomButtons = [
  {
    name: "Live Video",
    icon: <Video size={25} />,
    color: "red",
  },
  {
    name: "Photo/video ",
    icon: <ImageUp size={25} />,
    color: "green",
  },
  {
    name: "Feeling/activity",
    icon: <Laugh size={25} />,
    color: "yellow",
  },
];
const user = "Mohamed";
const CreatePost = () => {
  return (
    <div className="w-full shadow border rounded-md p-5 bg-white">
      <div className="flex items-center gap-3">
        <div className="bg-slate-100 text-slate-500 border rounded-full p-2">
          <User size={25} />
        </div>
        <div className="w-full">
          <FacebookInput placeholder={`What's on your mind, ${user}?`} />
        </div>
      </div>
      <div className="h-[1px] w-full bg-slate-200 my-3"></div>
      <div className=" flex items-center justify-between">
        {bottomButtons.map((index) => (
          <div className="w-full" key={index.name}>
            <FacebookButton
              className="w-full"
              variant={"MiddleNav"}
              size={"MiddleNavSize"}
            >
              <div className="flex items-center gap-2">
                <div style={{ color: index.color }}>{index.icon}</div>
                <div>{index.name}</div>
              </div>
            </FacebookButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
