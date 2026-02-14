"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    setMessages(data);
  }

  async function deleteMessage(id) {
    await supabase.from("contacts").delete().eq("id", id);
    fetchMessages();
  }

  return (
    <div style={{ padding: "4rem" }}>
      <h1>Contact Messages</h1>

      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            marginBottom: "1rem"
          }}
        >
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Mobile:</strong> {msg.mobile}</p>
          <p><strong>Message:</strong> {msg.message}</p>

          <button
            onClick={() => deleteMessage(msg.id)}
            style={{
              background: "red",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              marginTop: "1rem"
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
