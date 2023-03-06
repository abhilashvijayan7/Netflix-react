import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/Constants'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [films, setFilms] = useState([])
  const [trailer,setTrailer] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
        setFilms(response.data.results)
    }).catch((e)=>console.log(e.message))
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const movieTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setTrailer(response.data.results[0])
      }else console.log('trailer not found')
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {films.map((film)=>
                <img onClick={()=>movieTrailer(film.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+film.backdrop_path}`} alt="post" />
          )}
        </div>
        { trailer && <YouTube  videoId={trailer.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
