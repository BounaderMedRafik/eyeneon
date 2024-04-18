import React from "react";
import FacebookSideTab from "./ui/FacebookSideTab";
import {
  Bookmark,
  Cake,
  CalendarFold,
  CircleUserRound,
  Clock4,
  Headset,
  MonitorPlay,
  Newspaper,
  Users,
} from "lucide-react";

const sideBarLink = [
  {
    name: "UserName",
    icon: <CircleUserRound size={20} />,
  },
  {
    name: "Friends",
    icon: <Users size={20} />,
  },
  {
    name: "Memories",
    icon: <Clock4 size={20} />,
  },
  {
    name: "Saved",
    icon: <Bookmark size={20} />,
  },
  {
    name: "Groups",
    icon: <Users size={20} />,
  },
  {
    name: "Video",
    icon: <MonitorPlay size={20} />,
  },
  {
    name: "Feed",
    icon: <Newspaper size={20} />,
  },
  {
    name: "Events",
    icon: <CalendarFold size={20} />,
  },
  {
    name: "Ads Manager",
    icon: <Headset size={20} />,
  },
];
const SideBar = () => {
  return (
    <div className="w-full p-5">
      {sideBarLink.map((index) => (
        <div key={index.name}>
          <FacebookSideTab name={index.name} icon={index.icon} />
        </div>
      ))}
      <div className="h-[1px] w-full bg-black/10 my-5"></div>
      <div>
        <div className="font-bold text-slate-500">Your shortcuts</div>
        <div className="mt-2  animate-pulse">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <FacebookSideTab name="Suprise" icon={<Cake size={20} />} />
          </a>
        </div>
      </div>
      <div className="text-xs  text-slate-500 mt-5">
        Cloned By Bounader Med Rafik
      </div>
    </div>
  );
};

export default SideBar;
