import Image from "next/image";
import React from "react";

const MessageComponent = ({
  message,
  created_at,
  userName,
  profilePicture,
  email,
}) => {
  const isUser = 1;

  return (
    <div className={`flex w-fit my-3 ${isUser ? "ml-auto" : "mr-auto"}`}>
      <div className={`flex-shrink-0 ${isUser ? "order-2" : "order-[0]"}`}>
        <Image
          className="rounded-full mx-2 h-[50px]"
          height={10}
          width={50}
          src={profilePicture}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] text-red-300 ${
            isUser ? "text-right text-blue-300" : "text-left text-red-300"
          }`}
        >
          {userName}
        </p>

        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white  ${
              isUser ? "bg-blue-400 order-1" : "bg-red-400 order-[0]"
            }`}
          >
            <p>{message}</p>
          </div>
          <p
            className={`text-[0.65rem] italic px-2 text-gray-300 ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {new Date(created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
