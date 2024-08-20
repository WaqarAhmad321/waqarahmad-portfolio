"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./Hello";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-10">
      <button
        className="rounded-full bg-special p-4 text-white"
        onClick={() => {
          console.log("hello")
          setChatBoxOpen((open) => !open);
          console.log(chatBoxOpen);
        }}
      >
        <Bot size={40} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  );
}
