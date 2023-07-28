import React from 'react'
import './aside.css';
import {NavLink} from 'react-router-dom'



export default function Aside() {
  return (
    <aside className='aside'>
        
        <NavLink to={'/'} 
          className={({isActive}) => isActive ? "active" : ""}
        >
          {" "} 
          Home{" "} 
        </NavLink> 
        
        <NavLink 
          to={'cienciaFiccion/'} 
          className={({isActive}) => isActive ? "active" : ""}
        > 
          {" "}
          Ciencia Ficcion{" "} 
        </NavLink>
        
        <NavLink 
         to={'terror/'} className={({isActive}) => isActive ? "active" : ""}
        > 
          {" "} 
          Terror{" "}
        </NavLink>
 
        <NavLink 
         to={'comedia/'} className={({isActive}) => isActive ? "active" : ""}
        > 
         {" "}
         Comedia{" "}
        </NavLink>

        <NavLink 
         to={'documental/'} className={({isActive}) => isActive ? "active" : ""}
        > 
          {" "}
          Documental{" "} 
        </NavLink>
  
        <NavLink 
         to={'independientes/'} className={({isActive}) => isActive ? "active" : ""}
        >
         {" "} 
         Independientes{" "} 
        </NavLink>
  
    </aside>
  )
}

      