"use client";

import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

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
    <HStack>
      <ColorModeButton />
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
}
