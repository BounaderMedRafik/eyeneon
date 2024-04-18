import MyButton from "@/components/Myui/MyButton";
import { ArrowLeft, Ban } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full relative bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]  flex-col flex items-center overflow-hidden justify-center h-screen">
      <div className="text-5xl flex  items-center gap-3 font-heading font-bold">
        404 Not Found <Ban className="text-destructive" size={50} />
      </div>
      <div className="mt-2">
        the page you are trying to access{" "}
        <span className="underline text-destructive underline-offset-4">
          does not exist
        </span>
      </div>
      <div className="mt-5">
        <Link href={"/"}>
          <MyButton variant="destructive" text="Main Menu">
            <ArrowLeft size={15} />
          </MyButton>
        </Link>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-destructive/50 blur-3xl"></div>
    </div>
  );
};

export default NotFound;
