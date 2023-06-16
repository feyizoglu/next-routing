// import getAllUsers from "../lib/getAllUsers.js";
import Link from "next/link";

async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export default async function Page() {
  const usersData = getAllUsers();
  const users = await usersData;

  return (
    <div>
      <h1 className="text-cyan-400">User Data</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link href="/" > Go Back</Link>
    </div>
  );
}
