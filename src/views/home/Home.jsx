import React from 'react'
import Opciones_menu from '../menu/opciones_menu';
import { Outlet } from 'react-router-dom';
import Aside from '../menu/aside/Aside';
import "./home.css";


export default function Home() {
  return (

    <>
        <div>
         <Opciones_menu/>
        </div>

        <div className='main-container'>
         <Aside className="aside-item"/>
         <Outlet className="outlet-item"/>
        </div>


    </>
 
  )
}
