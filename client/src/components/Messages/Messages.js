import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./messages.css";

const Messages = ({ messges }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
