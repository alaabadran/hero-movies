import Link from "next/link";
import type { NextPage } from "next";
import { ReactNode } from "react";

export const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <header className="bg-slate-800">
        <span className="py-2 px-6 inline-block">Super Hero Movies</span>
        <Link className="py-2 px-6 inline-block" href="/">
          Home
        </Link>
      </header>
      <div className="text-main">{children}</div>
    </div>
  );
};
