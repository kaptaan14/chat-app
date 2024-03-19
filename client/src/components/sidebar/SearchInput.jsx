import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../state/useConversation";
import usegetConversation from "../../hooks/usegetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = usegetConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!search) return;

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("")
    }else{
      toast.error("No User found");
    }
  }



  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search users"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch size={30} />
      </button>
    </form>
  );
};

export default SearchInput;
