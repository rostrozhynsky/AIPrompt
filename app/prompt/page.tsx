"use client";

import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";

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
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ask OpenAI</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter your prompt"
      />
      <Button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Loading..." : "Send"}
      </Button>
      {reply && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Response:</strong>
          <p>{reply}</p>
        </div>
      )}
    </main>
  );
}
