import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";


import Pelicula from './views/peliculas/pelicula.jsx'
import Opciones_menu from './views/menu/opciones_menu.jsx'
import Elemento_footer from './views/footer/elemento_footer.jsx'
import './index.css'
import Home from './views/home/Home.jsx';
import Peliculas from './views/peliculas/pelicula.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <Home />,
  children: [
    {
      path: "/",
      element: <h1>Welcome</h1>,
    },
    {
    path: "/peliculas",
    element: <Pelicula/>
    }

  ]
},

]


)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   
  </React.StrictMode>
)
