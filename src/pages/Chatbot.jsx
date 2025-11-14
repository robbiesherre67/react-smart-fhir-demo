import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your pediatric AI assistant. I can help explain conditions, medications, and visit summaries in parent-friendly language. How can I help today?",
    },
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input.trim() };

    // Simple mock AI behavior
    const aiMessage = {
      role: "assistant",
      content:
        "This is a demo response. In a real deployment, this would come from a GenAI model (e.g., OpenAI) with pediatric-safe guardrails.",
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <Card>
      <h2>Pediatric AI Assistant</h2>
      <p style={{ marginTop: 4, color: "#64748b", fontSize: 13 }}>
        Front-end chat experience for a GenAI / RAG-powered pediatric concierge.
        Currently wired to mock responses for demo and portfolio purposes.
      </p>

      <div className="chat-window">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={
              "chat-bubble " + (m.role === "user" ? "user" : "assistant")
            }
          >
            {m.content}
          </div>
        ))}
      </div>

      <div className="chat-input-row">
        <textarea
          className="chat-input"
          rows={2}
          placeholder="Ask a question, e.g. “Can you explain what mild persistent asthma means for my child?”"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="primary" onClick={handleSend}>
          Send
        </Button>
      </div>
    </Card>
  );
}
