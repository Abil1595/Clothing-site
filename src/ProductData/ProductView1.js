import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductDetails';
import { Row, Col,Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
function ProductView() 
{
  const { id1 } = useParams();
  console.log(id1,"check11")
  const product = products.find((product) => product.id === id1);
  const { name, description, category, price, image } = product;
  console.log(product,"check")
  const dispatch=useDispatch();  
  const handleAddToCart = () => {
    dispatch(addToCart({name,price,image}));
  };  
  return (
    <div> 
      <Container> 
       <Row>
        <Col sm={6}>  
          <img src={image} alt='' />
        </Col>
        <Col sm={6}>
        <div className='product-details'>
          <h1>{name}</h1>
          ${price}<br />   
          {category}<br />
          {description}<br/><br/>
          <button className='shirt-button' onClick={()=>{dispatch(addToCart({name,price,image}))
                          }} > Add To Bag</button>
                          </div>
        </Col>
      </Row><br/><br/>
      </Container>  
              
    </div>
  );
}

export default ProductView;
