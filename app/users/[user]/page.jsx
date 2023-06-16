import React from "react";

import UserPosts from "./UserPosts";
import { Suspense } from "react";
import Link from "next/link";

async function getUserPosts(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) return undefined;

  return res.json();
}

async function getUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) return undefined;

  return res.json();
}

export default async function UserPage({ params }) {
  const { userId } = params;
  const userData = await getUser(userId); // Await the userData promise
  const userPostsData = await getUserPosts(userId);
  const user = await userData; // Assign the awaited userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
      <p>
        <br />
        <Link href="/users">Back</Link>
      </p>
    </>
  );
}
