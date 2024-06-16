

import Shop from './Pages/Shop';
import './App.css'
import Navbar from './components/NavBar/Navbar'

import { Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <div>
      <Navbar/>
      
   
   
    <Routes>
      
    
        <Route path='/' element={<Shop/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/mens' element={<Product/>}/>
        
      </Routes> 
 

   
     
      </div>
     
    </>
  )
}

export default App
