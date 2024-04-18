import MySideBar from "@/components/docsComponents/MySideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[radial-gradient(#310147_1px,transparent_1px)] dark:bg-[radial-gradient(#66337d_1px,transparent_1px)] [background-size:16px_16px] relative">
      <div className="w-full h-full bg-gradient-to-t from-background to-transparent absolute top-0 left-0"></div>
      <div className=" relative z-20 container bg-background/75 backdrop-blur-sm mx-auto pt-24 border-x border-accent/20 flex">
        <div className="w-[20%]">
          <MySideBar />
        </div>
        <div className="p-10 w-full min-h-[90vh]">{children}</div>
      </div>
    </div>
  );
}
