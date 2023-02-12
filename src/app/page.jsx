import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { Providers } from "@/app/providers";
import { getServerSession } from "next-auth/next";
export default async function Home() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );

  const session = await getServerSession();

  return (
    <main>
      <MessageList initMessages={data} />
      <ChatInput />
    </main>
  );
}
