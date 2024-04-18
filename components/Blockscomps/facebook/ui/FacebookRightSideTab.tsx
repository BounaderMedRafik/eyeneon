import React from "react";

const FacebookRightSideTab = ({ name, pic }: any) => {
  return (
    <div className="hover:bg-slate-200 px-3 py-2  rounded-md transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <img
          src={pic}
          alt="pfp"
          className="h-9 w-9 object-cover rounded-full"
        />
        <div className="text-sm font-semibold text-slate-800">{name}</div>
      </div>
    </div>
  );
};

export default FacebookRightSideTab;
