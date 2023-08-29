import React from 'react';
import './page.css';
import Navigation from './Navigation';
import Shade from './Shade';
import Homecontent from './Home-content';
function Home() {
  return (
    <div className='home fullwidth'>
      <Shade />
      <Navigation />
      <Homecontent />
      
    </div>
  )
}

export default Home
