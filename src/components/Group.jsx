// src/components/Group.js
import React, { useState } from "react";

const Group = ({ group, user, groups, setGroups, handleGroupCreate }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const timestamp = new Date().toLocaleString();
    const message = {
      text: newMessage,
      sender: user,
      timestamp,
    };
    const updatedGroups = groups.map((g) =>
      g.name === group.name ? { ...g, messages: [...g.messages, message] } : g
    );
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setNewMessage("");
  };

  return (
    <div className="group">
      <h2>{group.name}</h2>
      <div className="messages">
        {group.messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === user ? "sent" : "received"
            }`}
          >
            <p>{message.text}</p>
            <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="message-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Group;
