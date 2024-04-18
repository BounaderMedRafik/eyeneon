"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  ArrowUpRight,
  GithubIcon,
  LinkedinIcon,
  PartyPopper,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import SearchButton from "./SearchButton";
import MyButton from "../Myui/MyButton";
import { ModeToggle } from "../Myui/mode-toggle";
import MyLogo from "../brand/MyLogo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    name: "Github",
    LinkTo: "https://github.com/BounaderMedRafik",
    icon: <GithubIcon size={15} />,
  },
  {
    name: "Linkedin",
    LinkTo: "https://www.linkedin.com/in/bounader-med-rafik/",
    icon: <LinkedinIcon size={15} />,
  },
  {
    name: "Twitter",
    LinkTo: "https://twitter.com/bwnadrrr",
    icon: <TwitterIcon size={15} />,
  },
  {
    name: "Youtube",
    LinkTo: "https://www.youtube.com/channel/UCj_nkiWsd2mACSBsI8pny4g",
    icon: <YoutubeIcon size={15} />,
  },
];
const MyNavigation = () => {
  const router = usePathname();
  return (
    <div>
      <div className="container z-50 fixed top-0 right-1/2 translate-x-1/2 bg-background/20 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" py-6">
            <MyLogo />
          </div>
          <div className="gap-2 items-center hidden md:flex">
            <div>
              <SearchButton />
            </div>
            <ul className="flex items-center">
              {links.map((index) => (
                <li key={index.name}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <a href={index.LinkTo} target="_blank">
                          <Button variant={"link"} size={"icon"}>
                            {index.icon}
                          </Button>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex items-center text-xs gap-1">
                          {index.name} <ArrowUpRight size={15} />
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              {router == "/" ? (
                <MyButton text="Start Now" variant="secondary">
                  <PartyPopper size={15} />
                </MyButton>
              ) : null}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavigation;
