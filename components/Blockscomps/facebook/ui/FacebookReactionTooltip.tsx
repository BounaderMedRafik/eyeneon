"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const FacebookReactionTooltipProvider = TooltipPrimitive.Provider;

const FacebookReactionTooltip = TooltipPrimitive.Root;

const FacebookReactionTooltipTrigger = TooltipPrimitive.Trigger;

const FacebookReactionTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-full shadow bg-white border-slate-400 px-1 py-1 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
FacebookReactionTooltipContent.displayName =
  TooltipPrimitive.Content.displayName;

export {
  FacebookReactionTooltip,
  FacebookReactionTooltipTrigger,
  FacebookReactionTooltipContent,
  FacebookReactionTooltipProvider,
};
