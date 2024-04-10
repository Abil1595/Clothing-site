import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductDetails';
import { Row, Col,Container } from 'reactstrap';
function ProductView() 
{
  const { id1 } = useParams();
  console.log(id1,"check11")
  const product = products.find((product) => product.id === id1);
  const { name, description, category, price, image } = product;
  console.log(product,"check")
  return (
    <div> 
      <Container> 
       <Row>
        <Col sm={6}>  
          <img src={image} alt='' />
        </Col>
        <Col sm={6}>
          <h1>{name}</h1>
          {price}<br />   
          {category}<br />
          {description}
        </Col>
      </Row><br/><br/>
      </Container>  
              
    </div>
  );
}

export default ProductView;
