import React from 'react'

function Navbar() {

  const signout = () =>{

  }

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/50763652?v=4" alt="" />
        <span>Muneeb</span>
        <button onClick={signout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar