import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/card/CardComponent.jsx'
import { Col, Row } from "react-bootstrap";
import './styles/pelicula.css'


export default function Pelicula(props) {

  const [pelisState, setPelis] = useState ([]);
  const [pelisFilter, setPelisFilter] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState(null);
  
  const [search, setSearch] =useState('');


  useEffect(() => {
        if (loading) {

            fetch (`http://localhost:5000/${props.type}`)

            .then((response) => response.json())
            .then((data) => {
                setPelis(data);
                setPelisFilter(data.peliculas);

                setLoading(false);                    
            })
        }           
    }, []);

    const searchBar = (e) => {
        let value = e.target.value;
        setSearch(e.target.value)

        console.log(search)
        
        
        if (!value) {
            setPelisFilter(pelisState.peliculas)
            
            
        }else{
           
            const filteredPeliculas  = pelisState.peliculas.filter((movie) => 
         movie.titulo.toLowerCase().includes(value.toLowerCase()));
         
         setPelisFilter(filteredPeliculas);
         
        }

    }
       
    if (loading) {
        return (
          <div>
            <h2>Loading...</h2>
          </div> 
        );
    } else {
        return (
          <div className="container-movies mt-3">
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-1 mt-5">
                        <h3>Buscador</h3>
                    </div>

                    <div className="row">
                        <div className="col text-center">
                            <input type="text" onChange={searchBar}  placeholder="Buscar pelicula"></input>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <h2 className="genero-title mt-5">{pelisState.genero}</h2>
                    </div>
                </div>
                <Row className="row row-items">
                 {pelisFilter.map((movie, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className="items">
                        <Link to={`/${movie.titulo}`} state={movie}>
                            <Card movie={movie} key={index} />
                        </Link>
                    </Col>
                  ))}
                </Row>
            </div>
          </div>
        )
    }    

 
};


