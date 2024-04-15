import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="px-5 py-2 overflow-hidden  group flex justify-between items-center gap-20 bg-accent/10 rounded-full  border-[1px] hover:opacity-80 transition-all border-black/20   text-xs">
            Searching...?
            <div>
              <Search
                className="opacity-0 transition-all group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                size={15}
              />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>dialog content</DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchButton;
