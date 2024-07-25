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
  const { cartTotalQuantity } = useSelector((state) => state.cart);
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
<Link to='/cart' className='lay'>
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
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
