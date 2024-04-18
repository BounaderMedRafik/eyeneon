import React from "react";
import { FacebookButton } from "./FacebookButton";

const FacebookSideTab = ({ name, icon }: any) => {
  return (
    <>
      <FacebookButton size={"tab"}>
        <div className="flex items-center gap-5">
          <div>{icon}</div>
          <div className="font-semibold mt-0.5">{name}</div>
        </div>
      </FacebookButton>
    </>
  );
};

export default FacebookSideTab;
