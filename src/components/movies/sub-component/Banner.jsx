import React, {useEffect ,useState} from 'react'
import axios from '../../Instance';

import { imgUrl , mystery, options ,ranNum} from '../../../Constance'
import Navigation from '../../maindiv/pages/Navigation';
import Shade from '../../maindiv/pages/Shade';

function Banner() {
    const [movies, setMovies] = useState('')
 
    useEffect(()=>{

    
         
         axios.get( mystery, options)
           
           .then(response => setMovies(response.data.results[ranNum ? ranNum :0]))
           .catch(err => console.error(err));

          
         },[])
  return (
    
        <div className='banner' style={{backgroundImage: `url(${movies ? imgUrl + movies.backdrop_path : '' })`}} >
   
       <Shade />
     
     <div className="movie_info">
     <h1 className='movie-name'>{movies ? movies.title : ''}</h1>
    <p className='view'>{movies ? movies.overview : ''}
    </p>
    
     </div>
      
       
     <Navigation /> 
   
 </div>

  )
}

export default Banner
