import React from 'react'
import add from '../img/addAvatar.png'

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input hidden type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={add} alt=""/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You don have an account? Login</p>
        </div>
    </div>
  )
}

export default Register