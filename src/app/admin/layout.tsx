import React, { ReactNode } from "react";
import Navbar from "../Navbar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <aside className="bg-slate-600 p-5 mr-5">AdminLayout</aside>
      {children}
    </div>
  );
};

export default AdminLayout;
