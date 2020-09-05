import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentyByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentyByCurrentUser = true;
  }
  return isSentyByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox">
        <p className="messageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText">{trimmedName}</p>
      <div className="messageBox">
        <p className="messageText">{text}</p>
      </div>
      <p className="sentText pl-10">{trimmedName}</p>
    </div>
  );
};

export default Message;
