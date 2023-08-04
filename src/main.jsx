import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Opciones_menu from './views/menu/opciones_menu.jsx'

import './index.css'
import Home from './views/home/Home.jsx';
import Peliculas from './views/peliculas/pelicula.jsx';
import DetalleMovie from './views/detalles/DetalleMovie.jsx';




const router = createBrowserRouter([{
  
  path: "/",
  errorElement: <h1>404 Not Found</h1>,
  element: <Home />,
  children: [
    {
      path: "/",
      element: <h1>Welcome</h1>,
    },
    {
      path:"/Home",
      element: <introHome/>
    },
    {
    path: "/cienciaFiccion",
    element: <Peliculas type="cienciaFiccion" key="cienciaFiccion"/>,
    },

    {
      path: "/comedia",
      element: <Peliculas type="comedia" key="comedia"/>,
      },
    {
      path: "/terror",
      element: <Peliculas type="terror" key="terror"/>,
    },
    {
      path: "/documental",
      element: <Peliculas type="documental" key="documental"/>,
    },
    {
      path: "/independientes",
      element: <Peliculas type="independientes" key="independientes"/>,
    },

    {
      path: "/:view",
      element: <DetalleMovie/>
    }

  ]

},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}/>
   
 
)
