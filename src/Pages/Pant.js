import React from 'react';
import bg from './shirt.avif';
import { Container,Row,Col } from 'reactstrap';
function Pant()

{
    return(
        <div>
            
      <Container fluid>
            <Row>
                <Col sm={2}>
                
                </Col>
                <Col sm={5}>
                <img src={bg}/>
                </Col>
            </Row>
      </Container>
       </div>
    );
}
export default Pant;