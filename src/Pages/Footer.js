import React from 'react';
import b4 from '../Images/etwlogo.png'; 
import { Container ,Col,Row,Card,CardGroup,CardTitle,CardBody,CardSubtitle} from 'reactstrap';
function Beauty()
{
    return(
        <div>
            <Container fluid>
       <div className='footer1'>
        <Row>
          <Col sm={4}>
          <h4>Products</h4>
          MEN'S WEAR<br/>
         WOMEN'S WEAR<br/>
          KID'S WEAR<br/>
          BEAUTY PRODUCTS <br/>
          <i className="ri-facebook-fill"></i> <i className="ri-instagram-line"></i> <i className="ri-twitter-x-line"></i> <i className="ri-whatsapp-line"></i>
          </Col>
          <Col sm={4}>
         <h4>Help Topics</h4>
          FAQs<br/>
          Payments<br/>
          Shipping<br/>
         Cancellation & Return<br/>
          Export
        </Col>
        <Col sm={4}>
      <h4>Registered Office Address</h4>

      Electric & Tech Clothing<br/>
      2nd floor<br/>
      LMR shopping Arcade<br/>
      Gtp Road<br/>
     Coimbatore-631027
        </Col>
     </Row>
     </div>
  <div className='footer2'>
    <Row>
      <Col sm={4}>
      <img src={b4} className='etw3'/>
      </Col>
      
   
    <Col sm={4}>
    copyrights@e&tclothing
    </Col>
    <Col sm={4}>
   All rights reserved
    </Col>
    </Row>
  </div>
  </Container>
        </div>
       
    );
}
export default Beauty;