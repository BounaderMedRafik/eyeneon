import MDXdesc from "@/components/MDXcomps/MDXdesc";
import MDXhead from "@/components/MDXcomps/MDXhead";
import MDXsplitter from "@/components/MDXcomps/MDXsplitter";
import MyButton from "@/components/Myui/MyButton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div>
      <div>
        <MDXhead title="Introduction" />
      </div>
      <MDXsplitter />
      <div>
        <MDXdesc title="Who are we ?">
          We are crew that located in algeria, web developpers who came up with
          an idea to make it easier for cloning websites in order to make
          projects, using{" "}
          <span className="text-accent font-black">Shadcn/ui</span> the library
          choice of every developper nowadays... share with us your exprience by
          visiting the github repo
        </MDXdesc>
      </div>
      <div className="mt-10">
        <MDXdesc title="What is this library ?">
          EyeLow is a open source project that focuses on styling unstyled
          components, while Shadcn/UI provides a collection of large unstyled
          components for use. The concept behind EyeLow is to take these
          components from Shadcn/UI and apply real-life styles from the market
          to create visually appealing and consistent designs.
        </MDXdesc>
      </div>
      <div className="mt-10">
        <MDXdesc title="How can i use EyeLow ?">
          EyeLow makes it incredibly easy to leverage its styling capabilities
          for your own projects. By following a few simple steps, you'll be able
          to use styled components wherever you need them. Here's a guide to
          help you get started:{" "}
        </MDXdesc>
        <div className="mt-4 w-fit border-accent/20 border-[1px] rounded-md">
          <MyButton text="Installation Guide" variant="link">
            <ArrowUpRight size={15} />
          </MyButton>
        </div>
      </div>
    </div>
  );
}
