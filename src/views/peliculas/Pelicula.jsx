
import React, {useState} from 'react'
import Card from '../components/card/card_component.jsx'
import './styles/pelicula.css'
import pelisJson from'./pelisJson.json'



export default function Pelicula() {
    

    return (
        <div className='Container-movies'>
            { pelisJson.peliculas.map((movie, index) =>
                <Card movie={movie} key={index}/>


            )}
             
        </div>
    )
};

/* Crear componente para Menu
otro componente para footer
un componente para sub menu*/