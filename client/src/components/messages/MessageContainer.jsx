import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../state/useConversation";


const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  return (
    <>
      {selectedConversation && (
        <div className={`w-full h-full flex flex-col `}>
          <div className="bg-slate-500 px-4 py-2 mb-2 mt-auto top-0">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </div>
       )} 
    </>
  );
};

export default MessageContainer;


