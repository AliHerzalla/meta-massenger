import LogOutButton from "@/components/LogOutButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const session = true;

  if (session) {
    return (
      <header className="sticky top-0 z-50 p-10 bg-white flex items-center justify-between shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src={"https://links.papareact.com/jne"}
            alt={"Logo"}
            width={50}
            height={10}
          />
          <div>
            <p className="text-blue-400">Logged in as : </p>
            <p className="font-bold text-lg">Ali Herzalla</p>
          </div>
        </div>
        <LogOutButton/>
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 p-10 bg-white flex items-center flex-col justify-center shadow-sm">
      <div className="flex items-center flex-col space-y-5">
        <div className="flex items-center space-x-2">
          <Image
            src={"https://links.papareact.com/jne"}
            alt={"Logo"}
            width={50}
            height={10}
          />

          <p className="text-blue-400">Welcome to Meat Messenger</p>
        </div>
        <Link
          href={"/auth/signin"}
          className="py-2 px-4 hover:bg-blue-700 bg-blue-500 rounded text-white transition duration-300"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;
