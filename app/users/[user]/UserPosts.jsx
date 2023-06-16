import React from "react";

async function getUserPosts(userId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  
    if (!res.ok) return undefined;
  
    return res.json();
  }

export default async function UserPosts({ promise }) {
  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}