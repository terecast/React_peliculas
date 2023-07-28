import React from "react";
import './detalleMovie.css'
import { useLocation } from "react-router-dom";

export default function DetalleMovie() {
    const location = useLocation()
    const movie = location.state

    return (
        <div className="container detalle-container">

           
            <div className="row">

                <div className="col-titulo-portada">
                    <h1>{location.state.titulo}</h1>
                    <img className="detalle-portada" src={movie.portada} alt="" />
                     
                </div>
                        
                <div className="row-anio-director">
                    <p>{`Año ${location.state.anio}`}</p>
                    <p>{`Director: ${location.state.director}`}</p>
                </div>

                <div className="row-sinopsis">
                  <p>{movie.sinopsis}</p>
                </div>

                <div className="row">
                    <h2>Elenco</h2>
                    
                    {movie.actores.map((actor, index) => (
                        <li key={index}>{actor}</li>
                        ))
                    }

                </div>


            </div>
        </div>
    )
}