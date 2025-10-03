import { Sidebar } from "@/widgets/sidebar";
import React, { type ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 my-container">
      <Sidebar />
      <div className="col-span-9 px-4 h-screen overflow-scroll">
        {children}
      </div>
    </div>
  );
};

export default layout;
