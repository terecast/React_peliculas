
import './card_component.css';
import { useState } from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";

function Card({movie}) {
  const [isLikes, setIsLiked] = useState(false);
  const handlerLike = (e) => {
    if(isLikes) {
      setIsLiked(false);
    }else{
      setIsLiked(true);
    }
  }

  return (
    <div className="card-style">
      <img src= {movie.portada} alt="" className= 'portada' />

      <div className='movie-description ma-10'>
        <div className='movie-description-info'>
         <h1 className='movie-title'>{movie.titulo}</h1>
         <p className='movie-subtitle'>{movie.director}</p>
         <p>{movie.año}</p>
        </div>
        
        <div className='like-button'>
          <span onClick={handlerLike}> 
          {" "}
          {isLikes ? <FaHeart className='icon-Red'/> :  <FaRegHeart/> } 
          </span>
        </div>
      </div>
    </div>

  )
    

};

export default Card;
