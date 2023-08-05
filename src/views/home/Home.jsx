import React from 'react'
import OpcionesMenu from '../menu/OpcionesMenu';
import { Outlet } from 'react-router-dom';
import Aside from '../menu/aside/Aside';
import "./home.css";
import IntroHome from '../introHome/IntroHome';


export default function Home() {
  return (

    <>
        <div>
         <OpcionesMenu/>
        </div>

        <div className='main-container'>
         <IntroHome className="intro"/>
         <Aside className="aside-item"/>
         <Outlet className="outlet-item"/>
        </div>
    </>
 
  )
}