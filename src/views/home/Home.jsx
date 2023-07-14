import React from 'react'
import Opciones_menu from '../menu/opciones_menu';
import { Outlet } from 'react-router-dom';


export default function Home() {
  return (
    
    <>
    <div><Opciones_menu/></div>
    <div>
        <Outlet/>
    </div>

    </>
  )
}
