import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Pages/Layout';     
import Home from './Pages/Home';
import Men from './Pages/Men'; 
import Women from './Pages/Women';      
import Kids from './Pages/Kids';      
import Footer from './Pages/Footer';                                    
import Login from './Pages/Login';                         
import Signin from './Pages/Signin';             
import Cart from './Component/Cart'    
import ProductView from './ProductData/ProductView';  
import ProductView1 from    './ProductData/ProductView1';    
import Dashboard from "./Component/Admin/Dashboard";  
import  Create from "./Component/Admin/Create"     
import Update from './Component/Admin/Update';                 
function App()       
{                        
                                    
                         
  return (                                       
    <div className='App'>                                                    
      <BrowserRouter>                                       
      <Layout/>          
                             
    <Routes>                                                     
     <Route path='/' element={<Home/>}/>                                                             
     <Route path='/men' element={<Men/>}/>           
     <Route path='/women' element={<Women/>}/>  
     <Route path='/kids' element={<Kids/>}/>  
     <Route path="/admin" element={<Dashboard />}/>      
     <Route path='/login' element={<Login/>}/>    
     <Route path='/signin' element={<Signin/>}/>  
     <Route path='/cart' element={<Cart/>}/>        
     <Route path='/men/:id' element={<ProductView/>}/>      
     <Route path='/women/:id1' element={<ProductView1/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/edit/:id' element={<Update/>}/>  
    </Routes>    
                                   
    </BrowserRouter>                    
     
    <Footer/> 
    </div>
  );         
}

export default App;
