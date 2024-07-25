import React,{useState}from 'react';
import bg from '../Images/kids-shirt1.avif';
import bg1 from '../Images/kids tshirt.avif';
import bg2 from '../Images/kids hoodie.avif';
import bg3 from '../Images/kids new shirt.avif';
import bg4 from '../Images/girls.avif';
import bg5 from '../Images/fit jeans.avif';
import bg6 from '../Images/flared dress.avif';
import bg7 from '../Images/pant1.avif';
import bg8 from '../Images/kids jackets.avif';
import bg9 from '../Images/nehru jacket.avif';
import products from '../ProductData/ProductDetails';
import { Container, Row,Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
function Kids()
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

  const viewpage = products.filter(product => product.category === "view2");
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
          <option>Kids Shirt</option>
          <option>Kids Pants</option>
          <option>Kids(Girls)</option>
          <option>Kids Jacket</option>
          <option>Kids T-shirt</option>   
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
          <Link to={`/men/${view.id}`}> <button className='shirt-button'>View Details</button></Link>
            </div>
            </Col>
            
                 
          )
            )
        }
         </Row> <br/><br/>
                {/*<Row>
           <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg}/>
            <h5>E&T Checked Short- Shirt</h5>
            ₹584<br/>
            MRP₹649 (10% OFF)<br/>
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg1}/>
            <h5>E&T Floral Print Polo T-Shirt</h5>
            ₹650<br/>
            MRP₹1,299 (50% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg2}/>
            <h5>E&T Checked Shirt with  Hood</h5>
            ₹432<br/>
            MRP₹899 (52% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg3}/>
            <h5>E&T Fit Shirt  Spread Collar</h5>
            ₹432<br/>
            MRP₹899 (52% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            </Row><br/><br/>
            <Row>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg4}/>
            <h5>E&T Floral Print Flare Dress</h5>
            ₹799<br/>
            MRP₹1499 (52% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg5}/>
            <h5>E&T Mid-Rise Slim Fit Jeans</h5>
            ₹1,299<br/>
            MRP₹2499 (50% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg6}/>
            <h5>E&T one Shoulder  Dress</h5>
            ₹899<br/>
            MRP₹1798 (50% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}> 
            <div className='kids-shirt'>
            <img src={bg7}/>
            <h5>E&T girls leggings grey  </h5>
            ₹499<br/>
            MRP₹998 (50% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            </Row><br/><br/>
            <Row>
              <Col sm={3}>
              
              </Col>
              <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg8}/>
            <h5>E&T Floral  Denim Jacket  </h5>
            ₹713<br/>
            MRP₹1,399 (49% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
            <div className='kids-shirt'>
            <img src={bg9}/>
            <h5>E&T Nehru Jacket  </h5>
            ₹940<br/>
            MRP₹1,999 (53% OFF)<br/>   
          Price inclusive of all taxes<br/>
          <button className='kids-button'>View Details</button>
            </div>
            </Col>
            <Col sm={3}>
              
              </Col>
              </Row><br/>*/}
            <br/>
                </>   
              ):null
            }
            
            </Container>
       
        </div>
    );
}
export default Kids;