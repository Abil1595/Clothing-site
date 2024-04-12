import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import {Nav,Navbar,NavbarToggler,Collapse,NavItem,NavLink,NavbarBrand,Modal,Input} from 'reactstrap';
import bg1 from '../Images/etwlogo.png';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signin from './Signin'
import products from '../ProductData/ProductDetails';  
function Layout() 
{     
  
  
    const [nav1,setNav]=useState(false);       
  const Navtoggle=()=>setNav(!nav1);    
 const cartItemCount = useSelector((state) => state.cart.itemCount);
  return (
    <div className="App"> 
    
<Navbar color="light" light expand="lg">
 <NavbarBrand ><Link className='women-link' to="/"><img src={bg1} className='etw'/></Link></NavbarBrand>
 <NavbarToggler onClick={Navtoggle}/>
 <Collapse isOpen={nav1} navbar>    
<Nav className="mr-auto" navbar>
<NavItem>
<NavLink><Link className='women-link' to="/"><div className='home'>HOME</div></Link></NavLink>
</NavItem>
<NavItem>
<NavLink ><Link className='women-link' to="/men">MEN</Link></NavLink>
</NavItem>
<NavItem>
<NavLink><Link className='women-link' to="/women">WOMEN</Link></NavLink>   
</NavItem>
<NavItem>
<NavLink ><Link  className='women-link' to="/kids">KIDS</Link></NavLink>
</NavItem>


<NavItem>
<NavLink ><Link  className='women-link' to="/admin"></Link>

</NavLink>
</NavItem>
<NavItem>
<NavLink ><Link  className='women-link' to="/create"></Link>

</NavLink>
</NavItem>
<Link to='/cart' className='women-link'>
<i className="ri-shopping-bag-line">{cartItemCount}</i>
</Link>

<NavItem>
<NavLink><Link to='/login'  className='women-link'><div className='login'  ><button  >Login</button></div></Link></NavLink>
</NavItem>
<NavItem>
<NavLink><Link to='/signin' className='women-link'><div className='signin'><button   >Signin</button></div></Link></NavLink>
</NavItem>

</Nav>
 </Collapse>
 </Navbar><br/>
           
           
    </div>
  );
}

export default Layout;
