import MDXdesc from "@/components/MDXcomps/MDXdesc";
import MDXhead from "@/components/MDXcomps/MDXhead";
import MDXoneLineCode from "@/components/MDXcomps/MDXoneLineCode";
import MDXsplitter from "@/components/MDXcomps/MDXsplitter";
import MyButton from "@/components/Myui/MyButton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <>
      <div>
        <MDXhead title="Installation" />
        <MDXsplitter />
        <div>
          <MDXdesc title="Ensure You are Using the Latest Next.js Version">
            To ensure that you are using the latest version of Next.js in your
            development environment, you can follow these steps:
            <div className="pl-4 pt-4">
              <div>
                • Check the Next.js documentation or the Next.js GitHub
                repository for the latest version available.
              </div>
              <div className="mt-1">
                • Update the Next.js package in your project by running the
                following command in your terminal or command prompt:
              </div>
            </div>
          </MDXdesc>
          <div className="my-5">
            <MDXoneLineCode code="npm install next@latest" />
          </div>
          <div className="pl-4 pt-4 text-sm opacity-75">
            <div>
              • Once the installation is complete, verify that you are using the
              latest version by running the following command:
            </div>
          </div>
          <div className="my-5">
            <MDXoneLineCode code="npx next -v" />
          </div>
        </div>
      </div>
      <div>
        <MDXsplitter />
      </div>
      <div>
        <div>
          <MDXdesc title="Install shadcn/ui in your project">
            To use shadcn/ui in a Next.js project, you can follow these steps:
            <div className="pl-4 pt-4">
              <div>
                • Create a new Next.js project using the shadcn/next-template
                template.
              </div>
              <div>
                • Install the required dependencies and set up Tailwind CSS.
              </div>
              <div> • Configure the cn utils for your project.</div>
              <div>
                • Start adding components to your project by placing them in the
                components/ui folder
              </div>
            </div>
          </MDXdesc>
          <div className="my-5">
            <MDXoneLineCode code="npx shadcn-ui@latest init" />
          </div>
          <div className="pl-4 pt-4 text-sm opacity-75">
            <div>
              • Now you can use and import shadcn/ui unstyled components to your
              project.
            </div>
          </div>
          <div className="my-5">
            <MDXoneLineCode code="npx shadcn-ui@latest add button" />
          </div>
        </div>
        <div>
          <MDXsplitter />
        </div>
      </div>
      <div>
        <MDXdesc title="Visit Shadcn/ui documentations">
          To ensure a smooth installation process, I recommend visiting the
          shadcn/ui documentation. It provides a comprehensive guide with
          detailed instructions. You can find the complete installation process
          and all the necessary steps there. Following the documentation will
          help you set up and configure shadcn/ui effectively. Feel free to
          explore the documentation for a seamless experience!
        </MDXdesc>
        <div className="mt-4 w-fit border-accent/20 border-[1px] rounded-md">
          <a
            target="_blank"
            href={"https://ui.shadcn.com/docs/installation/next"}
          >
            <MyButton text="Shadcn/ui documentations" variant="link">
              <ArrowUpRight size={15} />
            </MyButton>
          </a>
        </div>
      </div>
    </>
  );
}
