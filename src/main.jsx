import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




import './index.css'
import Home from './views/home/Home.jsx';
import Pelicula from './views/peliculas/pelicula.jsx';
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
    element: <Pelicula type="cienciaFiccion" key="cienciaFiccion"/>,
    },

    {
      path: "/comedia",
      element: <Pelicula type="comedia" key="comedia"/>,
      },
    {
      path: "/terror",
      element: <Pelicula type="terror" key="terror"/>,
    },
    {
      path: "/documental",
      element: <Pelicula type="documental" key="documental"/>,
    },
    {
      path: "/independientes",
      element: <Pelicula type="independientes" key="independientes"/>,
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
