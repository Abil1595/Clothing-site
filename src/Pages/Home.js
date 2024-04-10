import React,{useState} from 'react';
import bg from '../Images/men-image.avif';
import bg1 from '../Images/women-image.avif';
import bg2 from '../Images/kids-image.avif';
import b4 from '../Images/kitchen1.jpg'; 
import { Container ,Col,Row,Card,CardGroup,CardTitle,CardBody,CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import bg5 from '../Images/clothing.jpg';
import bg3 from '../Images/banner-image.png'
import bg6 from '../Images/easy-exchange.png';
import bg7 from '../Images/hand-picked.png';
import bg8 from '../Images/assured.png';
import bg9 from '../Images/women-dress.webp'
import bg10 from '../Images/shopping-bag.webp';
import bg11 from '../Images/apple-pay.svg';
import bg12 from '../Images/visa.svg';
import bg13 from '../Images/master.svg';
import bg14 from '../Images/amex.svg';
import bg15 from '../Images/paypal.svg';
import ProductDetails from '../ProductData/ProductDetails'
import products from '../ProductData/ProductDetails';
function Home()
{
  
  
    return(
        <div>
            <Container fluid>
         <br/><br/>
        
            
           
                <div className='row'>
              <div className='content1'>

              </div>
              <div className='banner12'>
               <img src={bg5}/>
              </div>
            <div className='Banner1'>
             <div className='trend'>TRENDY</div>
                <div className='fashion'>Fashion</div>
                <div className='text'>
                UP TO 50% OFFER <br/>
                Don't MISS THE DEAL<br/>
                </div>
                <button className='shop'>Shop Now</button>
                </div>
               
            <div className='content2'>

               </div>
            </div>
           

         <br/><br/>
          <br/><br/>
         
          <Row>
            
            <Col sm={4}>
                <div className='shirt1'>
             <img src={bg}/> 
             <Link to='/men' className='women-link'><h5>MEN'S WEAR</h5></Link>
             </div>
            </Col>
            <Col sm={4}> 
            <div className='shirt1'>
             <img src={bg1}/>
             <Link to="/women" className='women-link'><h5>WOMEN'S WEAR</h5></Link>
             </div>
             </Col>
             <Col sm={4}> 
            <div className='shirt1'>
             <img src={bg2}/>
             <Link to="/kids" className='women-link'><h5>KID'S WEAR</h5></Link>
             </div>
            </Col>
           
          </Row><br/>
          <Row>
            <Col sm={6}>

             <img src={bg9} alt='' className='women-dress'/>
            </Col>
            <Col sm={6}>
              <div className='text-new'>
              <h1>Elevate Your Wardrobe with E&T</h1>
              As Autumn approaches, ensure you elevate your style<br/> with some of E&T's finest pieces from<br/> the AW Collection.
              </div>
           
            </Col>
          </Row><br/>
          <Row>
            <Col sm={12}>
              <div className='clothing-bag'>
              Clothings Hot<br/> Collection<br/> Accessories
              <img src={bg10} />
              <div className='shopping'>

              
              if you purchase <br/>more than 1000 Rs <br/>We will give you a <br/>Shopping Bag for free<br/>Kindly grab
              this opportunity
              </div>
              </div>
             
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className='offer'>
              <i className="ri-arrow-left-line"></i> GET 10% OFFER FOR YOUR FIRST ORDER  <i className="ri-arrow-right-line"></i>
              </div>
              
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className='offer1'>
              <h1>Want First Dibs?</h1><br/>
              Join our email list and be the first to know about new limited edition products, material innovations, <br/>
              and lots of other fun updates.<br/><br/><br/>
              <input type="text" placeholder='Enter Your Email Address'/> <button className='sign'>SUBSCRIBE</button>
              </div>
              
            </Col>
          </Row>
          <Row>
            <Col sm={12}> 
            <div className='payment'>
            <div className='apple'>
            <img src={bg11}/>
              </div>
              <div className='visa'>
              <img src={bg12}/>
              </div>
              <div className='americanex'>
              <img src={bg13}/>
              </div> 
              <div className='paypal'>
              <img src={bg14}/>
              </div>
              <div className='paypal'>
              <img src={bg15}/>
              </div>
                       
            </div>
            
            </Col>
          </Row>
          <br/><br/>
          <Row >
            
            <Col sm={4}>
            <div className='free-delivery'>
             <h1>Free Delivery</h1>
             For orderes over Rs 200 to <br/>  IND and for ordersover Rs 250 <br/>over outside india
            </div>
            </Col>
            <Col sm={4}>
            <div className='free-returns'>
             <h1>Free Returns</h1>
             Free & seamless returns from INDIA<br/>so you try french way 'sans' stress<br/>
             For outside india returns will be subject<br/>to additional fee
            </div>
            </Col>
            <Col sm={4}>
            <div className='free-security'>
             <h1>Security Purpose</h1>
             Securely it will arrive without<br/>any damage & Surely<br/>On Time  <br/><br/>
             
            </div>
            </Col>
          </Row><br/><br/>
          <Row>
            <Col sm={4}>  
              <div className='exchange'>
              <img src={bg6}/><br/>
             EASY EXCHANGE
              </div>
            
            </Col>
            <Col sm={4}>
              <div className='exchange1'>
              <img src={bg7}/><br/>
             100% HAND PICKED
              </div>
            
            </Col>
            <Col sm={4}>
              <div className='exchange1'>
              <img src={bg8}/><br/>
            ASSURED QUALITY
              </div>
            
            </Col>
            
          </Row>
         <br/>
               
           
            
          
          
   </Container><br/>
        </div>
    );
}
export default Home;