import React,{useState,useEffect} from 'react';
import bg from '../Images/shirt.avif';
import bg1 from '../Images/pant.avif';
import bg2 from '../Images/denim.avif';
import bg3 from '../Images/striped.avif';
import bg4 from '../Images/men-pants.avif';
import bg5 from '../Images/cargo.avif';
import bg6 from '../Images/coat men.avif';
import bg7 from '../Images/men coat 2.webp'
import bg8 from '../Images/men blazers.avif'; 
import bg9 from '../Images/men blazers2.avif';
import bg10 from '../Images/etwlogo.png';    
import {  Col, Container, Row } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom'
import Products from '../ProductData/ProductDetails'
import products from '../ProductData/ProductDetails';
import { resetCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';  
import { addItemToCart } from '../features/cart/cartSlice';
import {deleteItemFromCart} from '../features/cart/cartSlice'
import {useSelector} from 'react-redux'
import { remove } from '../features/cart/cartSlice';
function Men()
{

  
  const { users } = useSelector(state => state.cart);
  const [hide, setHide]= useState(true)
  const [addDetail, setAddDetail] = useState({
    id: '',
    image:'',
    name:" ",
    price:" ",
    category:" ",
    description:" ",
  })
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 

 
  const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };
  const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //   dispatch(addItemToCart());
  // };
  const handleAddToCart = () => {
    dispatch(addItemToCart());
  };
  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const viewpage = products.filter(product => product.category === "view");
  console.log(viewpage, 'check');
  

  const handleSearch = () => {
      const results = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()),
          
      );
      setHide(false)
      setSearchResults(results);
      setAddDetail(results)
  };
  console.log(addDetail)

    return(
   <div>
   
    <Container fluid>
      <div className='search-input'  >
        <select onChange={handleSearchChange} value={searchTerm} className='select-input'>
          <option>Mens Shirt</option>
          <option>Mens Pants</option>
          <option>Mens Denim Shirt</option>
          <option>Mens Jacket</option>
          <option>Mens Blazer</option>   
        </select> 
       
         <button onClick={handleSearch}className='sign-button' >Select</button>
        </div>
            <div className="product-list">
                {searchResults.map(product => ( 
                    <div className='prod-details' key={product.id}>
                      <div className='prod-image'>
                      <img src={product.image} alt=''   />
                      </div>
                      
                      <div className='prod-des'>
                      <p>{product.name}</p>
                         <h3>{product.price}</h3>
                         <p>{product.description}</p>
                         <button className='shirt-button' onClick={()=>{dispatch(addItemToCart(product))
                          }} > Add To Bag</button>
 {/*<button className='shirt-button' onClick={()=>{dispatch(resetCart(product))
                          }} > Add To Bag</button>
                           
                         {/* <button className='shirt-button' onClick={dispatch(deleteItemFromCart(product))} > Add To Bag</button> */}

                      </div> 
                         
                    </div>   
                ))}
            </div>
     <br/><br/>
    

    {
      hide === true ? (
        <>   
        <Row>
        {
          viewpage.map((view) =>(
           
           
        <Col sm="3" key={view.id} className='men-columns'>
            <div className='shirt'>
             <img src={view.image} alt=''/>
           <h5>{view.name} </h5>  
          <br/>    
          {view.price}<br/>   
          Price inclusive of all taxes<br/>
          <Link to={`/men/${view.id}`}> <button className='shirt-button'>View Details</button></Link>
          
            </div>
            
            </Col>
            
            
          )
            )
        }
         {
          users.map((u,index)=>  
          {
            return(
              
                <Col sm="3" key={index.id} >
                <div className='shirt'>
          {index+1}<br/>
          
          {u.name}<br/>
        {u.image}<br/>
        {u.price}<br/>
         {u.des}
         </div>
        </Col>
             
            )
          })
        }
         </Row> <br/><br/><br/>
{/* 
/////////////////////////////////////////////////////////////////////////////////////
        <Col sm={3}>
            <div className='denim'>
            <img src={bg2}/>
          <h5>E&T Denim Shirt with Flap </h5>
          ₹660<br/>
          MRP₹2,199 (70% OFF)<br/>
          Price inclusive of all taxes
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}>
            <div className='striped'>
            <img src={bg3}/>
          <h5>E&T Striped Cotton Shirt</h5>
          ₹1,000<br/>
          MRP₹1,999 (50% OFF)<br/>
          Price inclusive of all taxes
          <button className='shirt-button' >View Details</button>
            </div>
        </Col>
    </Row><br/><br/>

    
     
      
        <Row>
        <Col sm={3}>
             <div className='men-pants'>
             <img src={bg4}/>
              <h5>E&T Tapered Fit  Trousers</h5>
              ₹480<br/>
              MRP₹1,599 (70% OFF)<br/>
              Price inclusive of all taxes
              <button className='shirt-button' >View Details</button>
             </div>
          </Col>
          <Col sm={3}> 
             <div className='men-cargo'>
             <img src={bg5}/>
              <h5>E&T Cargo Pants</h5>
              ₹470<br/>
              MRP₹999 (53% OFF)<br/>
              Price inclusive of all taxes
              <button className='shirt-button' >View Details</button>
             </div>
          </Col>
          <Col sm={3}>
             <div className='men-cargo'>
             <img src={bg6}/>
              <h5>E&T Zip-Front Jacket </h5>
              ₹750<br/>
              MRP₹2,499 (70% OFF)<br/>
              Price inclusive of all taxes
              <button className='shirt-button' >View Details</button>
             </div>
          </Col>
          <Col sm={3}>
             <div className='men-cargo'>
             <img src={bg7}/>
              <h5>E&T Zip-Front Hooded Jacket </h5>
              ₹1,500<br/>
              MRP₹4,999 (70% OFF)<br/>
              Price inclusive of all taxes
              <button className='shirt-button' >View Details</button>
             </div>
          </Col>
        </Row>
        <br/><br/>
          <Row>
            <Col sm={3}>
            
            </Col>
            <Col sm={3}>
            <div className='men-cargo'>
             <img src={bg8}/>
              <h5>E&T  Slim Fit Blazer </h5>
              ₹5,599<br/>
              MRP₹7,999 (30% OFF)<br/>
              Price inclusive of all taxes
              <button className='shirt-button' >View Details</button>
              </div>
            </Col>  
            <Col sm={3}>
            <div className='men-cargo'>
             <img src={bg9}/>
              <h5>E&T  Heathered  Blazer </h5>
              MRP₹5,995<br/>
              MRP₹7,999 (30% OFF)<br/>
              Price inclusive of all taxes
              <button className='shirt-button' >View Details</button>
              </div>
            </Col>
            <Col sm={3}>
            
            </Col>
          </Row><br/> */}
                    {/* <br/> */}
                    </>
      ) : null
    }
      {/*<Row>
   {
          users.map((u,index)=>  
          {
            return(
              <>
                <Col sm={3} key={index} className='crud-products'>
         
          {index+1}<br/>
          
          {u.name}<br/>
        {u.image}<br/>
        {u.price}<br/>
         {u.des}
        </Col>
              </>
            )
          })
        }
        </Row>
    
      */}
    
          
    </Container>
    
   </div>

    );
}
export default Men;