import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <main className="flex-1 md:flex">
        <Sidebar />
        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};
