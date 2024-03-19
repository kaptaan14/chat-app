import React, { useEffect } from "react";
import useConversation from "../../state/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  useEffect(()=>{
    return () => setSelectedConversation(null);
  },[setSelectedConversation])



  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline? "online":""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
