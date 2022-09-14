import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login