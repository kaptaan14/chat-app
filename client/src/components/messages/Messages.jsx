import React, { useEffect, useRef } from "react";
import Message from "./Message";
import usegetMessages from "../../hooks/usegetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = usegetMessages();
  const lastMessageRef = useRef();
  useListenMessages()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        <span className="loading loading-spinner self-center"></span>
      ) : null}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
