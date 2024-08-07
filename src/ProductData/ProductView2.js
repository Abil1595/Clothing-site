import React from 'react';
import { useParams } from 'react-router-dom';
import { UseSelector } from 'react-redux'; 
import products from './ProductDetails';
import { Row, Col,Container } from 'reactstrap';     
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductView() 
{
    
  const { id2 } = useParams();   
            
  console.log(id2,"check1")     
  const detail = products.find((product) => product.id === id2);  
 const {image,name,price,description,category} = detail
  console.log(detail,"check");
 const dispatch=useDispatch();
 const handleAddToCart = () => {
  dispatch(addToCart({name,price,image}));
};

  return (   
    <div>    
      <Container>      
       <Row>      
        <Col sm={6}>     
          <img src={image} alt=''/>  
        </Col>
        <Col sm={6}>
         <div className='product-details'>
          <h1>{name}</h1><br/>
          <p>${price}</p><br />   
         
          {description}<br/><br/>
          <button className='shirt-button' onClick={()=>{dispatch(addToCart({name,price,image}))
                          }} > Add To Bag</button>
          </div>
        </Col>
  </Row><br/><br/><br/>
      
  </Container>     
    </div>
  );
}

export default ProductView;
