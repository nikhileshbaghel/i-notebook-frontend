import React from 'react'
import Login from './Login'
import UserWithLogin from './UserWithLogin'
import UserWithoutLogin from './UserWithoutLogin'
import { useNavigate } from 'react-router-dom'


const UserInfo = ()=> {
  let navigate = useNavigate();
   if(!localStorage.getItem('token'))
   {
    navigate('/login');
   }
  return (
      <>
       {localStorage.getItem('token')?<UserWithLogin />:<Login />}
      </>
  )
}

export default UserInfo