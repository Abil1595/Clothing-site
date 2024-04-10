import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { add,setImageUrl } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {Row,Col,Container,Input,Form} from 'reactstrap'
function Create()
{
  
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [imageUrlInput,setImageUrl]=useState("")
    const [des,setDes]=useState("")
    const [price,setPrice]=useState("")
    const [file, setFile] = useState();
    const dispatch=useDispatch()
   

    const handleSubmit = (e) => {   
      e.preventDefault();
   
     
    }; 
    return(
        <div>
          <Container>
 <div>   
  <Row>
    <Col sm={4}></Col>
     <Col sm={4}>
  <Form  onSubmit={handleSubmit}>
      <label>ID:</label><Input type="text" value={id}  required onChange={(e)=>setId(e.target.value)}/><br/>
      <label>ProductName:</label><Input type="text" value={name}  required onChange={(e)=>setName(e.target.value)}/><br/>
      <label>IMAGE:</label><Input type="text" value={imageUrlInput} required  onChange={(e)=>setImageUrl(e.target.value)}/><br/>
      <label>PRICE:</label><Input type="text" value={price} required  onChange={(e)=>setPrice(e.target.value)}/><br/>
      <label>Description:</label><Input type="text" value={des} required  onChange={(e)=>setDes(e.target.value)}/><br/>
      <button  className='dasboard-button1'onClick={()=>{
        if(!id || !name)
        {   
          return
        }
        dispatch(add({id:id,name:name,image:imageUrlInput,price:price,des:des}))
        setId("")   
        setName("")
        setImageUrl("")
        setPrice("")
        setDes("")
        console.log(id)
      }}>Add</button>
      <Link to="/admin">Back to Dashboard</Link>
      </Form>
      </Col>
      <Col sm={4}></Col>
      </Row> 
    </div><br/>
    
    </Container>
        </div>
    );
}
export default Create;