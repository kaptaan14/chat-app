import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import useConversation from "../../state/useConversation";
import MessageContainer from "../messages/MessageContainer";

const Sidebar = () => {
  const { selectedConversation } = useConversation();  


  return (
    <>

        <div className={`border w-full border-slate-500 p-4 flex flex-col ${selectedConversation? "hidden":""}`}>
          <SearchInput />
          <div className="divider px-3"></div>
          <Conversations />
          <LogoutBtn />
        </div>


      {selectedConversation && <MessageContainer />}
    </>
  );
};

export default Sidebar;
