import Link from "next/link";

const UserLink = ({ user }) => (
  <Link href={`/users/${user.id}`}>{user.name}</Link>
);

export default UserLink;
