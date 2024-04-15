import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, PartyPopper, User2Icon } from "lucide-react";
import SearchButton from "./SearchButton";
import MyButton from "../Myui/MyButton";
import { ModeToggle } from "../Myui/mode-toggle";
import MyLogo from "../brand/MyLogo";

const links = [
  {
    name: "link",
    LinkTo: "/link-to",
  },
  {
    name: "link2",
    LinkTo: "/link2-to",
  },
  {
    name: "link3",
    LinkTo: "/link3-to",
  },
];
const MyNavigation = () => {
  return (
    <div>
      <div className="w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" py-6">
            <MyLogo />
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <SearchButton />
            </div>
            <ul className="flex items-center">
              {links.map((index) => (
                <li key={index.name}>
                  <Button className="group" variant={"link"}>
                    <Link
                      className="flex items-center gap-2 "
                      href={index.LinkTo}
                    >
                      {index.name}{" "}
                      <ArrowUpRight
                        className="opacity-0 mt-1 group-hover:mt-0 transition-all group-hover:opacity-100"
                        size={15}
                      />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <MyButton text="Start Now" variant="secondary">
                <PartyPopper size={15} />
              </MyButton>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavigation;
