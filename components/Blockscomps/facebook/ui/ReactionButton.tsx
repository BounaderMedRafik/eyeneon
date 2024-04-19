import React from "react";
import { FacebookButton } from "./FacebookButton";
import {
  FacebookReactionTooltip,
  FacebookReactionTooltipContent,
  FacebookReactionTooltipProvider,
  FacebookReactionTooltipTrigger,
} from "./FacebookReactionTooltip";
import { Heart, Smile, ThumbsUp } from "lucide-react";

const reactions = [
  {
    name: "Like",
    variant: `like`,
    icon: <ThumbsUp size={25} />,
  },
  {
    name: "Love",
    variant: `love`,
    icon: <Heart size={25} />,
  },
  {
    name: "emojie",
    variant: `emojie`,
    icon: <Smile size={25} />,
  },
];

const ReactionButton = () => {
  return (
    <FacebookReactionTooltipProvider delayDuration={100}>
      <FacebookReactionTooltip>
        <FacebookReactionTooltipTrigger className="w-full">
          <div className="w-full">
            <FacebookButton className="w-full">
              <div
                className="flex itemce 
              gap-2 font-semibold
              "
              >
                <ThumbsUp size={20} />
                Like
              </div>
            </FacebookButton>
          </div>
        </FacebookReactionTooltipTrigger>
        <FacebookReactionTooltipContent>
          <div className="flex items-center gap-0.5">
            {reactions.map((index) => (
              <div key={index.name}>
                <FacebookButton size={"icon"} variant={index.variant}>
                  {index.icon}
                </FacebookButton>
              </div>
            ))}
          </div>
        </FacebookReactionTooltipContent>
      </FacebookReactionTooltip>
    </FacebookReactionTooltipProvider>
  );
};

export default ReactionButton;
