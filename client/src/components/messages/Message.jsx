import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../state/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromme = message.senderId === authUser._id
  const chatClassname = fromme? 'chat-end': 'chat-start';
  const profilePic = fromme? authUser.profilePic : selectedConversation.profilePic;
  const messageColor = fromme? 'bg-blue-500' : '';
  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassname}`}>
        <div className='chat-image avatar'>
            <div className='rounded-full w-10'>
            <img alt="img" src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${messageColor} `}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message