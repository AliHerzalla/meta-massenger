"use client";

import fetcher from "@/utils/fetchMessages";
import { clientPusher } from "pusher";
// import { clientPusher } from "../../pusher";
import React, { useEffect } from "react";
import useSWR from "swr";
import MessageComponent from "./MessageComponent";

const MessageList = ({initMessages}) => {
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);

    const channel = clientPusher?.subscribe("message");
    channel?.bind("new-message", async (data) => {
      if (messages?.find((message) => message.id === data.id)) return;
      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [...messages],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel?.unbind_all();
      channel?.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <div className="space-y-5 px-5 pt-8 pb-[100px] max-w-2xl xl:max-w-4xl mx-auto flex flex-col-reverse">
      {(
        messages || initMessages.filter((message) => message.created_at = false)
      )?.map((message) => (
        <MessageComponent key={message.id} {...message} />
      ))}
    </div>
  );
};

export default MessageList;
