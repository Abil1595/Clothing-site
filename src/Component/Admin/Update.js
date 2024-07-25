import React,{useState,useContext} from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { update } from '../../features/cart/cartSlice';
import {Table,Input,Row,Col,Container,Form} from 'reactstrap'
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
function Update()  
{   
  
  const { users } = useSelector(state => state.cart);
  const [id,setId]=useState("")
  const [name,setName]=useState("")   
  const [imageUrlInput,setImageUrlInput]=useState("")
  const [des,setDes]=useState("")
  const [price,setPrice]=useState("")
  const dispatch=useDispatch()
 

 const [newUsername, setNewUsername] = useState("");

const handleSubmit = (e) => {   
  e.preventDefault();

 
}; 

    return(
        <div>  
            <Container>           
              
        <Row>   
            <Col sm={4}></Col>    
            <Col sm={4}>
            <Form  onSubmit={handleSubmit}>
      <label>ID:</label><Input type="text" value={id}  required onChange={(e)=>setId(e.target.value)} /><br/>
      <label>NAME:</label><Input type="text" value={name}  required onChange={(e)=>setName(e.target.value)}/><br/>
      <label>IMAGE:</label><Input type="text" value={imageUrlInput}  required  onChange={(e)=>setImageUrlInput(e.target.value)}/>
      {imageUrlInput && <img src={imageUrlInput} alt="Product" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
      <br/>
      <label>PRICE:</label><Input type="text" value={price} required  onChange={(e)=>setPrice(e.target.value)}/><br/>
      <label>Description:</label><Input type="text" value={des} required  onChange={(e)=>setDes(e.target.value)}/><br/>
      <button  className='dasboard-button1'onClick={()=>{
        if(!id || !name)
        {   
          return
        }
        dispatch(update({id:id,name:name,image:imageUrlInput,price:price,des:des}))
        setId("")   
        setName("")
        setImageUrlInput("")    
        setPrice("")
        setDes("")
      }}>Update</button>
      <Link to="/admin">Back to Dashboard</Link>   
      </Form>
      </Col>
      <Col></Col>
      </Row><br/><br/>
        </Container> 
        </div>
    );
}
export default Update 