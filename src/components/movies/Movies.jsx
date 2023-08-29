import React from 'react'
import Banner from './sub-component/Banner'
import './movies.css'
import { action, horror, mystery, tv } from '../../Constance'
import Smallmovie from './sub-component/Smallmovie'
import { Link } from 'react-router-dom'
function Movies() {
  return (
    <div>

      <Banner />

      <Smallmovie title="Mystery"  url={ mystery } />
      <Smallmovie title="Action"  url={ action } />
      <Smallmovie title="Horror"  url={ horror } isSmall />
      <Smallmovie title="TV movies"  url={ tv }  isSmall />

      <button className='sign button-style'>
         <Link to='/' className='link'>
             HOME 
             </Link>
             </button>
      
    </div>
  )
}

export default Movies
