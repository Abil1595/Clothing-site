import React from 'react';
import { useParams } from 'react-router-dom';
import { UseSelector } from 'react-redux'; 
import products from './ProductDetails';
import { Row, Col,Container } from 'reactstrap';     
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

function ProductView() 
{
 
  const { id } = useParams();  
          
  console.log(id,"check1")   
  const detail = products.find((product) => product.id === id);
 const {image,name,price,description,category} = detail
  console.log(detail,"check");
 const dispatch=useDispatch();
 const handleAddToCart = () => {
  dispatch(addItemToCart({name,price,image}));
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
          <p>{price}</p><br />   
         
          {description}<br/>
          <button className='shirt-button' onClick={()=>{dispatch(addItemToCart({name,price,image}))
                          }} > Add To Bag</button>
          </div>
        </Col>
  </Row><br/><br/><br/>
      
  </Container>     
    </div>
  );
}

export default ProductView;
