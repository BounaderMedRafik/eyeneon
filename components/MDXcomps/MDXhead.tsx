import { Hash } from "lucide-react";
import React from "react";

const MDXhead = ({ title }: any) => {
  return (
    <div className="text-4xl hover:bg-accent/10 cursor-default p-3 border-[1px] transition-all border-transparent hover:border-accent/30 rounded-md flex gap-2 items-center font-heading font-bold">
      <Hash />
      {title}
    </div>
  );
};

export default MDXhead;
