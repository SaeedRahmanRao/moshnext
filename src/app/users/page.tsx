import React, { Suspense } from "react";
import TableUser from "./TableUser";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link className="btn" href="./users/new">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <TableUser sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
