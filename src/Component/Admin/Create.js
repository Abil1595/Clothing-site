import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Input, Form } from 'reactstrap';

function Create() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !name) {
      return;
    }
    dispatch(add({ id, name, image: imageUrlInput, price, des }));
    setId('');
    setName('');
    setImageUrlInput('');
    setPrice('');
    setDes('');
  };

  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
              <Form onSubmit={handleSubmit}>
                <label>ID:</label>
                <Input type="text" value={id} required onChange={(e) => setId(e.target.value)} />
                <br />
                <label>ProductName:</label>
                <Input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                <br />
                <label>IMAGE:</label>
                <Input type="text" value={imageUrlInput} required onChange={(e) => setImageUrlInput(e.target.value)} />
                {imageUrlInput && <img src={imageUrlInput} alt="Product" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                <br />
                <label>PRICE:</label>
                <Input type="text" value={price} required onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label>Description:</label>
                <Input type="text" value={des} required onChange={(e) => setDes(e.target.value)} />
                <br />
                <button className='dasboard-button1' onClick={handleSubmit}>Add</button>
                <Link to="/admin">Back to Dashboard</Link>
              </Form>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </div>
        <br />
      </Container>
    </div>
  );
}

export default Create;
