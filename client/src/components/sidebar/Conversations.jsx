import React from 'react'
import Conversation from './Conversation'
import usegetConversation from '../../hooks/usegetConversation';

const Conversations = () => {
  const {loading,conversations} = usegetConversation();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {loading? <span className='loading loading-spinner'></span>: null}
        {conversations.map((conversation,index)=> (
          <Conversation key={conversation._id} 
          conversation={conversation}
          lastIndex={index === conversation.length-1}/>
        ))}
    </div>
  )
}

export default Conversations    