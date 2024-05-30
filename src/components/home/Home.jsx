import React from 'react'
import '../home/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signin')
  }

  return (
    <div className='content'>
        <h1>Learn to code -  for free.</h1>
        <h1>Build Projects.</h1>
        <h1>Earn Certifications.</h1>
        <p><span>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten<br/>Jobs at tech companies including</span></p>
        <i className="fa fa-apple"></i>
        <button onClick={handleClick}>Get Started (It's Free)</button>
    </div>
  )
}

export default Home