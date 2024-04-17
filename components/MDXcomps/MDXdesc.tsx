import React from "react";

const MDXdesc = ({ title, children }: any) => {
  return (
    <>
      <h2 className="text-xl font-semibold">✳ {title}</h2>
      <div className="text-sm mt-2 px-4 opacity-80 ">{children}</div>
    </>
  );
};

export default MDXdesc;
