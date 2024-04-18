import Image from "next/image";
import React from "react";
import { FacebookInput } from "./ui/FacebookInput";
import {
  Bell,
  CircleUserRound,
  Gamepad2,
  Grip,
  Home,
  HomeIcon,
  MessageCircle,
  MonitorPlay,
  Store,
  Users,
  VideoIcon,
  icons,
} from "lucide-react";
import { FacebookButton } from "./ui/FacebookButton";
import FacebookMiddleNavBtns from "./ui/FacebookMiddleNavBtns";

const middleNav = [
  {
    name: "Home",
    icon: <Home size={25} />,
  },
  {
    name: "Video",
    icon: <MonitorPlay size={25} />,
  },
  {
    name: "Market Place",
    icon: <Store size={25} />,
  },
  {
    name: "Groups",
    icon: <Users size={25} />,
  },
  {
    name: "Gaming",
    icon: <Gamepad2 size={25} />,
  },
];

const rightNav = [
  { name: "Dots", icon: <Grip size={25} /> },
  {
    name: "Messenger",
    icon: <MessageCircle className="fill-slate-800" size={25} />,
  },
  { name: "Bell", icon: <Bell className="fill-slate-800" size={25} /> },
  { name: "User", icon: <CircleUserRound size={25} /> },
];

const NavigationBar = () => {
  return (
    <div className="bg-white shadow-md relative z-20 px-5 py-1 rounded-t-lg flex items-center justify-between">
      <div className="flex items-center justify-centers gap-2">
        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Image
            width={40}
            height={40}
            src={"/facebook/facebooklogo.png"}
            alt="facebookLogo"
          />
        </a>
        <div>
          <FacebookInput placeholder="Search Facebook" />
        </div>
      </div>
      <div className="flex  items-center justify-center gap-1">
        {middleNav.map((index) => (
          <div className="" key={index.name}>
            <FacebookMiddleNavBtns tooltip={index.name}>
              {index.icon}
            </FacebookMiddleNavBtns>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {rightNav.map((index) => (
          <div key={index.name}>
            <FacebookButton size={"icon"}>{index.icon}</FacebookButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
