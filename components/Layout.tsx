import Link from "next/link";
import type { NextPage } from "next";
import { ReactNode } from "react";

export const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="bg-slate-800 shadow-md shadow-gray-800">
        <div className="container mx-auto">
          <span className="py-2 px-6 inline-block">
            <b>Super Heros</b>
          </span>
          <Link
            className="py-2 px-6 text-slate-400 inline-block hover:text-slate-100"
            href="/"
          >
            Home
          </Link>
        </div>
      </header>
      <div className="container mx-auto">
        <div className="text-main">{children}</div>
      </div>
    </>
  );
};
