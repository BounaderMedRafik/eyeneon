"use client";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

const MDXoneLineCode = ({ code }: any) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textToCopy = code;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  return (
    <div className="p-3 pl-5 group bg-accent/20 border-accent/40 flex items-center justify-between border-2 rounded-md font-heading">
      <div>$ {code}</div>
      <div className="opacity-0 group-hover:opacity-100 transition-all">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                onClick={handleCopy}
                className="hover:opacity-80"
                variant={"link"}
                size={"icon"}
              >
                {copySuccess ? <Check size={15} /> : <Copy size={15} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copySuccess ? "Copied" : "Copy"}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default MDXoneLineCode;
