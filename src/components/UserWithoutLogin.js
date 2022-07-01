import React from 'react'

const UserWithoutLogin=()=>{
    const Remove_localstorage = ()=>{
        localStorage.removeItem('name');
    }
  return (
    <div>login for enjoying the i_notebook services</div>
  )
}

export default UserWithoutLogin