// import search from './assets/search.png'
// import favorite from './assets/favorite-vector-icon.png'
// import shoppingCart from './assets/shoppingCart.jpg'
// import login from './assets/login.jpg'


import  { useState } from 'react'   
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
    const[menu,setMenu]=useState("shop")
    return (
        <div className='nav-container'>
         <div className='logo'> 
            <img src='https://cdn-icons-png.freepik.com/512/8539/8539117.png' alt=''/>
            <p>SHOPEE</p>
            </div> 
           <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>
               <Link style={{textDecoration:"none"}} to="/"> Shop {menu==="shop"?<hr/>:<></>}</Link> 
            </li>
            <li onClick={()=>{setMenu("womens")}}>
            <Link style={{textDecoration:"none"}} to="/womens"> Women {menu==="womens"?<hr/>:<></>}</Link> 
            </li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to ='/mens'>Mens{menu==="mens"?<hr/>:<></>}</Link>

            </li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to ='/kids'>Kids{menu==="kids"?<hr/>:<></>}</Link>
               
            </li>
           </ul>
          <div className='nav-login-cart'>
           <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdmxBVCvUMu2MI4mim9oxZYzNF0lApw2JxQ&s' alt=''></img></Link>
             <div className='nav-cart-count'>3</div>
          </div>          

        </div>
        
    )
}
export default Navbar