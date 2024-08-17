"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div className="flex justify-around space-x-6 bg-slate-500 h-10 items-center text-black">
        <Link href="/">Home</Link>
        <Link href="./users">Users</Link>
        <Link href="./admin">Admin</Link>
        <Link href="./products">Products</Link>
        {status === "authenticated" && (
          <div>
            {session.user!.name}
            <Link href="/api/auth/signout" className="ml-3">
              Log Out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
