import { ArrowUpRight } from "lucide-react";
import React from "react";
const MDXimage = ({ image, link }: any) => {
  return (
    <a target="_blank" href={link} className="group relative ">
      <div className="absolute group-hover:rotate-12 pointer-events-none flex items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 clear-start bg-accent/90 border-accent/40 px-4 py-1 rounded-md text-slate-50 -translate-y-1/2 z-20 group-hover:opacity-0 transition-all shadow-accent  group-hover:top-0">
        view original <ArrowUpRight size={18} />
      </div>
      <div className="w-full  overflow-hidden border rounded-md ">
        <img
          className="w-full  blur-sm hover:blur-none transition-all grayscale hover:grayscale-0  hover:scale-105 h-96 object-cover"
          src={image}
          alt="picture"
        />
      </div>
    </a>
  );
};

export default MDXimage;
