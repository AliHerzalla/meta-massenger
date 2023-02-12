"use client";

import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useSWR from "swr";
import fetcher from "@/utils/fetchMessages";

const ChatInput = ({ session }) => {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  const addMessage = async (event) => {
    event.preventDefault();
    const messageToSend = input;
    setInput("");

    const id = uuid();

    const message = {
      id: id,
      message: messageToSend,
      created_at: Date.now(),
      userName: "ali",
      profilePicture:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "ali@gmail.com",
    };

    const uploadMessageToUpStash = async () => {
      const response = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const data = await response.json();
      return [data.message, ...messages];
    };
    await mutate(uploadMessageToUpStash, {
      optimisticData: [message, ...messages],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      action="POST"
      className="flex fixed bottom-0 py-5 px-10 w-full space-x-2 border-t border-gray-100 bg-white"
    >
      <input
        type="text"
        disabled={!session}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your message..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="py-2 px-4 hover:bg-blue-700 bg-blue-500 rounded text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
