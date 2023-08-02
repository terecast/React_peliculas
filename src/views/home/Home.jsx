import React from 'react'
import Opciones_menu from '../menu/opciones_menu';
import { Outlet } from 'react-router-dom';
import Aside from '../menu/aside/Aside';
import "./home.css";
import IntroHome from '../introHome/IntroHome';


export default function Home() {
  return (

    <>
        <div>
         <Opciones_menu/>
        </div>

        <div></div>

        <div className='main-container'>
         <IntroHome className="intro"/>
        
         <Aside className="aside-item"/>
         <Outlet className="outlet-item"/>
        </div>


    </>
 
  )
}