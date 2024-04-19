import React from "react";

const FacebookRightSideTab = ({ name, pic }: any) => {
  return (
    <div className="hover:bg-slate-200 px-3 py-2  rounded-md transition-all cursor-pointer">
      <div className="flex relative items-center gap-3">
        <div className="relative">
          <div className="bg-green-500 absolute bottom-0 right-0 rounded-full h-3 w-3 border-slate-100 border-2"></div>
          <img
            src={pic}
            alt="pfp"
            className="h-9 w-9 object-cover rounded-full"
          />
        </div>
        <div className="text-sm font-semibold text-slate-800">{name}</div>
      </div>
    </div>
  );
};

export default FacebookRightSideTab;
