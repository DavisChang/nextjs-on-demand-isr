// Created by ChatGPT

import React from "react";
import "./chatInput.scss";

interface ChatInputProps {
  placeholder?: string;
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "傳訊息給 ChatGPT",
  onSend,
}) => {
  const [message, setMessage] = React.useState<string>("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button className="chat-send-button" onClick={handleSend}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="send-icon"
        >
          <path d="M2.01 21l20.99-9-20.99-9-.01 7 15 2-15 2 .01 7z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
