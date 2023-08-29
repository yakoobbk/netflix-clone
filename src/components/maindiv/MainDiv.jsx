import React from 'react'
import './MainDiv.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Footer from './pages/Footer';
import Faq from './pages/FAQ/Faq';
import { Link } from 'react-router-dom'
// import Movies from '../movies/Movies';

function MainDiv() {
  return (
    <div className='main-div fullwidth'>

       <Home />
       <Page1 />
       <Page2 />
       <Page3 />
       <Page4 />
       <Faq />
       <Footer />
       <button className='sign button-style'>
         <Link to='/Movies' className='link'>
             Movies 
             </Link>
             </button>

       {/* <Movies />       */}
    </div>
  )
}

export default MainDiv
