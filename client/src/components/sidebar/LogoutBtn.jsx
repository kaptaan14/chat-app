import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';


const LogoutBtn = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
        {!loading? (<TbLogout2 size={20} onClick={logout}/>): (
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}     

export default LogoutBtn