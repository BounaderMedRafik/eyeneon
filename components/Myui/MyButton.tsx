import React from "react";
import { Button } from "../ui/button";
import { User2Icon } from "lucide-react";

const MyButton = ({ text, variant, children }: any) => {
  return (
    <div>
      <Button className="group" variant={variant}>
        <div className="flex items-center gap-2">
          <div className=" translate-x-3 group-hover:translate-x-0 transition-all">
            {text}
          </div>
          <div className="translate-y-1 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
            {children}
          </div>
        </div>
      </Button>
    </div>
  );
};

export default MyButton;
