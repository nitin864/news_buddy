import React from 'react'
import NavBar from './NavBar' 
import News from './News' 
 
const Home = () => {
  return (
    <div className='home'>
      <div className="container">
           
            <NavBar></NavBar>
            <News></News>
      </div>
    </div>
  )
}

export default Home