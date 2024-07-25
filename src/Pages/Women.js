import React,{useState} from 'react';
import bg from '../Images/women-shirt.avif';
import bg1 from '../Images/women-pant.avif';
import bg2 from '../Images/checked-shirt.avif';
import bg3 from '../Images/denim-women.avif';
import bg4 from '../Images/women jacket.avif';
import bg5 from '../Images/women pants.avif';
import bg6 from '../Images/women cargo.avif';
import bg7 from '../Images/women blazer1.avif';  
import bg8 from '../Images/women blazer2.avif';
import bg9 from '../Images/women jack.avif';
import products from '../ProductData/ProductDetails';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
function Women()
{
 const[hide,setHide]=useState(true)
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
  const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart());
  };
  const viewpage = products.filter(product => product.category === "view1");
  console.log(viewpage, 'check');
  
  const handleSearch = () => {
      const results = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setHide(false)
      setSearchResults(results);
  };
    return(
        <div>
            <Container fluid>
            <div className='search-input'  >
        <select onChange={handleSearchChange} value={searchTerm} className='select-input'>
          <option>Women Shirt</option>
          <option>Women Pants</option>
          <option>Women Denim Shirt</option>
          <option>Women Jacket</option>
          <option>Women Blazer</option>   
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
                         <button className='shirt-button' onClick={()=>{dispatch(addToCart(product))
                          }} > Add To Bag</button>
                      </div>
                         
                    </div>
                ))}
            </div><br/>
            {
              hide === true ?(
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
          <Link to={`/women/${view.id}`}> <button className='shirt-button'>View Details</button></Link>
            </div>
            </Col>
            
               
          )
            )
        }
         </Row> <br/><br/><br/>
              {/*<Row>
        <Col sm={3}>
        <div className='women-shirt'>
          <img src={bg}/>
          <h5>E&T Women Striped  Fit Shirt</h5>
          MRP₹799<br/>
          MRP₹1,999 (50% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}>
        <div className='women-pant'>
          <img src={bg1}/>
          <h5>E&T Skinny Jeans   Pockets</h5>
          ₹1,139<br/>
          MRP₹1,899 (40% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}>
        <div className='women-pant'>
          <img src={bg2}/>
          <h5>E&T Checked Shirt   Sleeves</h5>
          ₹740<br/>
          MRP₹1,999 (63% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}> 
        <div className='women-denim'>
          <img src={bg3}/>
          <h5>E&T Denim Shirt   Collar</h5>
          ₹478<br/>
          MRP₹1,195 (60% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
       </Row><br/><br/>
       <Row>
        <Col sm={3}>
        <div className='women-denim'>
          <img src={bg4}/>
          <h5>E&T Denim Bomber Jacket</h5>
          ₹555<br/>
          MRP₹1,499 (63% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}>
        <div className='women-denim'>
          <img src={bg5}/>
          <h5>E&T High-Rise  Fit Trousers</h5>
          ₹360<br/>
          MRP₹1,999 (82% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}>
        <div className='women-cargo1'>
          <img src={bg6}/>
          <h5>E&T  Relaxed Fit Cargo Pants</h5>
          ₹1,472<br/>
          MRP₹3,199 (54% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
        <Col sm={3}>
        <div className='women-blazer1'>
          <img src={bg7}/>
          <h5>E&T  Checked Single  Blazer</h5>
          ₹2,062<br/>
          MRP₹2,945 (30% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
       </Row><br/><br/>
       <Row>
        <Col sm={3}>

        </Col>
        <Col sm={3}>
        <div className='women-blazer2'>
          <img src={bg8}/>
          <h5>E&T  Solid Full-length Blazer</h5>
          ₹1,000<br/>
          MRP₹2,499 (60% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col> 
        <Col sm={3}>
        <div className='women-jacket2'>
          <img src={bg9}/>
          <h5>E&T   Jacket with Flap Pockets</h5>
          ₹694<br/>
          MRP₹1,999 (65% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='shirt-button'>View Details</button>
            </div>
        </Col>
       </Row><br/>
              <br/>*/}
       </>
              ):null
            }
            
            </Container>
       
        </div>
    ); 
}
export default Women;