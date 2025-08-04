"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setReply(data.reply || data.error);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <Button>Click me</Button>
    </div>
  );
}
