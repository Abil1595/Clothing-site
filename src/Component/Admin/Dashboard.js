import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { remove } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Admin() {
  const { users } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <h1>ADMIN PANEL</h1>
        <Row>
          <Col sm={3}>
            <i className="ri-id-card-line"></i>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}></Col>
        </Row><br /><br /><br />
        <div>
          <Link className='create' to="/create">Create</Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>ProductName</th>
              <th>image</th>
              <th>price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td><img src={u.image} alt={u.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
                <td>{u.price}</td>
                <td>{u.des}</td>
                <td><button className='dasboard-button' onClick={() => dispatch(remove(u.id))}>Delete</button></td>
                <td><Link to={`/edit/${u.id}`}><button className='dasboard-button'>Update</button></Link></td>
              </tr>
            ))}
          </tbody>
        </Table><br /><br /><br />
      </Container>
    </div>
  );
}

export default Admin;
