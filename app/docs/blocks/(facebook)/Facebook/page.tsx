import { FacebookButton } from "@/components/Blockscomps/facebook/ui/FacebookButton";
import { FacebookInput } from "@/components/Blockscomps/facebook/ui/FacebookInput";
import MDXCodeBlock from "@/components/MDXcomps/MDXCodeBlock";
import MDXdesc from "@/components/MDXcomps/MDXdesc";
import MDXhead from "@/components/MDXcomps/MDXhead";
import MDXimage from "@/components/MDXcomps/MDXimage";
import MDXsplitter from "@/components/MDXcomps/MDXsplitter";
import { Heart, Search, Smile, ThumbsUp, X } from "lucide-react";
import React from "react";

const faceBookComps = [
  {
    code: `import * as React from "react";
    import { Slot } from "@radix-ui/react-slot";
    import { cva, type VariantProps } from "class-variance-authority";
    
    import { cn } from "@/lib/utils";
    
    const buttonVariants = cva(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            default: "bg-slate-100 text-slate-800 hover:bg-slate-200",
            MiddleNav: "bg-transparent hover:bg-slate-100 text-slate-600",
            like: "bg-blue-400 text-slate-50 hover:bg-blue-500",
            love: "bg-rose-400 text-slate-50 hover:bg-rose-500",
            emojie: "bg-yellow-400 text-slate-50 hover:bg-yellow-500",
          },
          size: {
            MiddleNavSize: "px-10 py-2 rounded-md",
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-12 w-12 rounded-full",
            tab: "w-full justify-start p-3",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      }
    );
    
    export interface ButtonProps
      extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
      asChild?: boolean;
    }
    
    const FacebookButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        );
      }
    );
    FacebookButton.displayName = "Button";
    
    export { FacebookButton, buttonVariants };
    `,
    ComponentsPreview: (
      <div className="flex flex-col items-center justify-center gap-5">
        <FacebookButton>Default</FacebookButton>
        <FacebookButton size={"MiddleNavSize"} variant={"MiddleNav"}>
          Middle Navigation Button
        </FacebookButton>
        <div className="flex items-center gap-2">
          <FacebookButton size={"icon"} variant={"love"}>
            <Heart size={20} />
          </FacebookButton>
          <FacebookButton size={"icon"} variant={"like"}>
            <ThumbsUp size={20} />
          </FacebookButton>
          <FacebookButton size={"icon"} variant={"emojie"}>
            <Smile size={20} />
          </FacebookButton>
        </div>
      </div>
    ),
    Title: "Facebook Buttons Pack",
    desc: "Facebook buttons pack containes alot of what you see buttons used in their website, full based on shadcn/ui",
    codeTitle: "FacebookButton.tsx",
  },
  {
    code: `import * as React from "react";

    import { cn } from "@/lib/utils";
    import { Search } from "lucide-react";
    
    export interface InputProps
      extends React.InputHTMLAttributes<HTMLInputElement> {}
    
    const FacebookInput = React.forwardRef<HTMLInputElement, InputProps>(
      ({ icon, className, type, ...props }, ref) => {
        return (
          <>
            <div className="flex pl-2 text-slate-500 rounded-full bg-slate-100 items-center">
              {icon}
    
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
    `,
    ComponentsPreview: (
      <div className="max-w-lg mx-auto flex flex-col items-center gap-1">
        <FacebookInput icon={<Search size={18} />} placeholder="seaching..." />
        <FacebookInput placeholder="seaching..." />
        <FacebookInput icon={<X size={18} />} placeholder="seaching..." />
      </div>
    ),
    Title: "Facebook Input",
    desc: "Facebook inputs for seach and posts making alot of what you see inputs used in their website, full based on shadcn/ui",
    codeTitle: "FacebookInput.tsx",
  },
];

const page = () => {
  return (
    <div>
      <MDXhead title="Facebook Clone Components" />
      <MDXsplitter />
      <MDXdesc title="Facebook ui">
        Facebook has a user interface (UI) that consists of various components.
        Here is a description of some of these components based on the search
        results:
        <div className="pl-4 pt-4">
          <div>
            • Posts are individual pieces of content shared by users on
            Facebook. They can include text, photos, videos, links, and other
            media. Posts can be liked, commented on, and shared by other users.
          </div>
          <div>
            • The News Feed is a central component of the Facebook UI. It
            displays a continuously updating list of posts, photos, and other
            content from a user's friends and the pages they follow.
          </div>
          <div>
            {" "}
            • Users can express their reaction to posts and comments using the
            "Like" button. Facebook also provides a range of reaction options,
            such as "Love," "Haha," "Wow," "Sad," and "Angry," allowing users to
            express a wider range of emotions.
          </div>
        </div>
        <div className="my-5">
          <MDXimage
            link="https://www.facebook.com/"
            image="https://images.hindustantimes.com/tech/img/2020/08/21/1600x900/facebook_new_design_1598007883528_1598007889163.jpg"
          />
        </div>
        <MDXsplitter />
        <MDXdesc title="UI components">
          basic shadcn/ui components but styled in a way can be used in any
          projects
        </MDXdesc>
        <div className="mt-8">
          {faceBookComps.map((index) => (
            <div className="my-8" key={index.Title}>
              <MDXCodeBlock
                Title={index.Title}
                codeTitle={index.codeTitle}
                desc={index.desc}
                code={index.code}
              >
                {index.ComponentsPreview}
              </MDXCodeBlock>
            </div>
          ))}
        </div>
      </MDXdesc>
    </div>
  );
};

export default page;
