"use client";
import { signIn } from "next-auth/react";
const SignInComponent = ({ providers }) => {
  return (
    <div className="flex justify-center">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => {
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000/",
              });
            }}
            className="py-2 px-4 hover:bg-blue-700 bg-blue-500 rounded text-white transition duration-300"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInComponent;
