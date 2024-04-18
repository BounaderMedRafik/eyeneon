import React from "react";
import { FacebookButton } from "./FacebookButton";
import {
  FacebookTooltip,
  FacebookTooltipContent,
  FacebookTooltipProvider,
  FacebookTooltipTrigger,
} from "./FacebookTooltip";

const FacebookMiddleNavBtns = ({ children, tooltip }: any) => {
  return (
    <div>
      <FacebookTooltipProvider delayDuration={10}>
        <FacebookTooltip>
          <FacebookTooltipTrigger>
            <FacebookButton variant={"MiddleNav"} size={"MiddleNavSize"}>
              <div className="py-1 px-2">{children}</div>
            </FacebookButton>
          </FacebookTooltipTrigger>
          <FacebookTooltipContent side="bottom">
            {tooltip}
          </FacebookTooltipContent>
        </FacebookTooltip>
      </FacebookTooltipProvider>
    </div>
  );
};

export default FacebookMiddleNavBtns;
