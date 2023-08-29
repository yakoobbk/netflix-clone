import React,  {useEffect , useState}from 'react'
import '../movies.css'
import YouTube from 'react-youtube';
import axios from '../../Instance';
import { imgUrl , options} from '../../../Constance'
function Smallmovie( props ) {
    const [small , setSmall] = useState([])

    const [vidId , setVidId] = useState('')

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
      
        autoplay: 1,
      },
    };

    useEffect(()=>{
     
        axios.get(props.url ? props.url : "" , options)
          
          .then(response => setSmall(response.data.results))
          .catch(err => console.error(err));
     
           },[])

           const videoPlay= (id)=>{
   
            axios.get(`movie/${id}/videos`, options)
                
            .then(response => {if(response.data.results.length !== 0){
              setVidId(response.data.results[0])
              // console.log(response.data.results[0])
            } else{
                   console.log('empty array')
              }}
              )
            .catch(err => console.error(err));
          
          }
  return (
    <div className='smalls'>
         <h3> {props.title}</h3>
   <div className="scrolls">


     {small.map((s)=>{
      return (   

          <img src={`${ s ?imgUrl + s.backdrop_path : ""}`} alt={ s ? s.title : ""}  title={s ? s.title : ""} className={props.isSmall ? 'mini-img' :'small-img' }  onClick={()=>videoPlay(s.id)} key={s.id} />
          )
     })}
  


    </div>
   { vidId && <YouTube videoId={vidId.key} opts={opts}  /> }
     
      
    </div>
  )
}

export default Smallmovie
