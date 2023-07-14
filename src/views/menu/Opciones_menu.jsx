import './opciones_menu.css'
import logo from './icons/logonetflix.png'
import {Link} from 'react-router-dom'


function Opciones_menu(){
  return (

    <div className="topnav">
        <img className='logo'  src={logo}></img>

        <Link to={'/'} > Home </Link>
        <a href="inicio">Inicio</a>
        <a href="series">Series</a>
        
        <a href="agregados">Agregados</a>
        <a href="mi_lista">Mi lista</a>
        <Link to={'peliculas/'} > Peliculas </Link>
        
        
    </div>


  );
  
}

export default Opciones_menu