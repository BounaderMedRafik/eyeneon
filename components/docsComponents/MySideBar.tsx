import { Download, Facebook, Info, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import MyButton from "../Myui/MyButton";

const linksGuide = [
  {
    name: "Introduction",
    linkTo: "/docs/guide/introduction",
    icon: <Info size={15} />,
  },
  {
    name: "Installation",
    linkTo: "/docs/guide/installation",
    icon: <Download size={15} />,
  },
];
const linksBlock = [
  {
    name: "Facebook",
    linkTo: "/docs/blocks/facebook",
    icon: <Facebook size={15} />,
  },
  {
    name: "Instagram",
    linkTo: "/docs/blocks/instagram",
    icon: <Instagram size={15} />,
  },
];
const MySideBar = () => {
  return (
    <div className="border-r border-accent/20">
      <div>
        <div className="font-heading font-bold">• Guide</div>
        <div className="">
          {linksGuide.map((index) => (
            <>
              <div
                className="w-fit mt-2 transition-all hover:bg-accent/10 rounded-md border-transparent hover:border-accent/40 border-[1px]"
                key={index.linkTo}
              >
                <Link className="" href={index.linkTo}>
                  <MyButton variant="link" text={index.name}>
                    {index.icon}
                  </MyButton>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="font-heading font-bold">• Blocks</div>
        <div className="">
          {linksBlock.map((index) => (
            <>
              <div
                className="w-fit mt-2 transition-all hover:bg-accent/10 rounded-md border-transparent hover:border-accent/40 border-[1px]"
                key={index.linkTo}
              >
                <Link className="" href={index.linkTo}>
                  <MyButton variant="link" text={index.name}>
                    {index.icon}
                  </MyButton>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySideBar;
