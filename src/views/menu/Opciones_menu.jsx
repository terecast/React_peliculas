import './opciones_menu.css'
import logo from './icons/logonetflix.png'
import {NavLink} from 'react-router-dom'


function Opciones_menu(){
  return (
    
    <header> 
      <nav className="topnav">
        

        <div className='container-nav-title'>
          <span>
            MEDIA APP
          </span>
        </div>

        <div className='container-nav-search'>

          <div className='container-nav-search-input'>
            <input type="text" placeholder='Search movies'/>
          </div>

          <div className='container-nav-profile'>
            <span>Teresa Castillo</span>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
          </div>



        </div>


        
  
      </nav>

    </header>


  );
  
}

export default Opciones_menu