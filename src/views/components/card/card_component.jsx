
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

      <img src= {movie.portada} alt="" className= 'portada' ></img>
      
      
      <div className='ma-10'>
        <div>
          <span onClick={handlerLike}> {isLikes ? <FaHeart className='icon-Red'/> :  <FaRegHeart/> } </span>
        </div>

        <h1>{movie.titulo}</h1>
        <p>{movie.director}</p>
        <p>{movie.año}</p>

      </div>
      
    </div>

  )
    



  
};

export default Card;
