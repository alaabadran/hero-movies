import type { NextPage } from "next";
import { ReactNode } from "react";

export const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="text-main">{children}</div>
    </div>
  );
};
