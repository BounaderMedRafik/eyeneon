"use client";

import React, { useState } from "react";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";
import MDXdesc from "./MDXdesc";
import { ScrollArea } from "../ui/scroll-area";

// Then register the languages you need
const MDXcodeBlock = ({ code, children, Title, desc, codeTitle }: any) => {
  const codeString = code;

  const [copySuccess, setCopySuccess] = useState(false);
  const textToCopy = codeString;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  const [preview, setPriview] = useState("preview");
  return (
    <>
      <div>
        <MDXdesc title={Title}>{desc}</MDXdesc>
      </div>
      <div className="flex items-center gap-1 mt-3">
        <Button size={"sm"} onClick={() => setPriview("code")}>
          code
        </Button>
        <Button size={"sm"} onClick={() => setPriview("preview")}>
          preview
        </Button>
      </div>

      {preview == "code" ? (
        <div className="relative mt-5 mx-auto max-w-4xl ">
          <div className="w-fit text-sm font-heading bg-accent opacity-80 text-slate-50 font-semibold px-5 py-0.5 rounded-t-lg border border-accent/20 border-b-0 ">
            {codeTitle}
          </div>
          <ScrollArea className="border  bg-[#f0f0f0] border-black/20 border-b-2 rounded-lg rounded-tl-none h-64">
            <SyntaxHighlighter showLineNumbers language="jsx">
              {codeString}
            </SyntaxHighlighter>
          </ScrollArea>
          <div className=" absolute top-10 right-3">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      onClick={handleCopy}
                      className="hover:opacity-80"
                      variant={"link"}
                      size={"icon"}
                    >
                      {copySuccess ? <Check size={18} /> : <Copy size={18} />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {copySuccess ? "Copied" : "Copy"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <ScrollArea className="border absolute inset-0 w-full  bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]  border-black/20 bg-slate-50/60 border-b-2 rounded-lg h-64">
            <div className="w-full mx-auto mt-10  gap-5">{children}</div>
          </ScrollArea>
        </div>
      )}
    </>
  );
};

export default MDXcodeBlock;
