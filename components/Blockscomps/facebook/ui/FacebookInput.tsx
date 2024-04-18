import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FacebookInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <div className="flex pl-2 text-slate-500 rounded-full bg-slate-100 items-center">
          <Search size={25} />

          <input
            type={type}
            className={cn(
              "flex h-[40px] placeholder:text-slate-500 bg-transparent  w-full rounded-full   px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  }
);
FacebookInput.displayName = "Input";

export { FacebookInput };
