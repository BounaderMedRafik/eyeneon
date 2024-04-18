import { Ellipsis, Search } from "lucide-react";
import React from "react";
import FacebookRightSideTab from "./ui/FacebookRightSideTab";
const people = [
  {
    name: "Bounader Med Rafik",
    pic: "https://source.unsplash.com/random",
  },

  {
    name: "John Smith",
    pic: "https://source.unsplash.com/random/2",
  },

  {
    name: "Emily Johnson",
    pic: "https://source.unsplash.com/random/3",
  },

  {
    name: "David Thompson",
    pic: "https://source.unsplash.com/random/4",
  },

  {
    name: "Sarah Davis",
    pic: "https://source.unsplash.com/random/5",
  },

  {
    name: "Michael Wilson",
    pic: "https://source.unsplash.com/random/69",
  },

  {
    name: "Jessica Brown",
    pic: "https://source.unsplash.com/random/420",
  },

  {
    name: "Daniel Martinez",
    pic: "https://source.unsplash.com/random/666",
  },

  {
    name: "Sophia Thompson",
    pic: "https://source.unsplash.com/random/87",
  },

  {
    name: "Oliver Johnson",
    pic: "https://source.unsplash.com/random/200",
  },
];
const SideBarRight = () => {
  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between">
        <div className="font-bold text-slate-500">Contacts</div>
        <div className="flex items-center gap-5 text-slate-500">
          <Search size={20} />
          <Ellipsis size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-7">
        {people.map((index) => (
          <div key={index.name}>
            <FacebookRightSideTab name={index.name} pic={index.pic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarRight;
