import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <button
      // onClick={() => signOut()}
      className="py-2 px-4 hover:bg-blue-700 bg-blue-500 rounded text-white transition duration-300"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
