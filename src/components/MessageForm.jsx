// src/components/MessageForm.js
import React, { useState } from "react";

const MessageForm = ({ addMessage }) => {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      text: messageText,
      timestamp: Date.now(),
    };
    addMessage(message);
    setMessageText("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        placeholder="Enter your message"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
