import React from 'react'
import '../navbar/Navbar.css'
import { useNavigate } from 'react-router-dom'

function Nav() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signin')
  }

  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')

  const handleNameClick = () => {
    localStorage.clear()
    window.location.reload()
  }


  const handleMenuClick = () => {
    if(!token){
      window.location.replace('/')
    }
  }
  
  return (
    <div className='navbar' >
        <input type='search' placeholder='search 800+ tutorials'/>
        <h4>freecodecamp</h4>
        <div>
            <button onClick={handleMenuClick}>Menu</button>
            {
              token ? 
              <button onClick={handleNameClick}>{name}</button>
              :
              <button onClick={handleClick}>Sign in</button>
            }
            
        </div>
    </div>
  )
}

export default Nav