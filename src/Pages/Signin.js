import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Row, Col, Button, Container } from 'reactstrap';
import { Link,  } from 'react-router-dom';

function Signin() {
  const [formdata, setFormData] = useState({
    username: '',
    password: '',
    confirmpassword: '',
  });
  const [errors, setErrors] = useState({});
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validationErrors = validateForm(formdata); 
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

     
      console.log('Form is valid:', formdata);
   
      setFormData({
        username: '',
        password: '',
        confirmpassword: '',
      });

    
    
    } catch (err) {
      console.error('Error during form submission:', err);
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    if (!formData.confirmpassword.trim()) {
      errors.confirmpassword = 'Confirm Password is required';
    } else if (formData.confirmpassword !== formData.password) {
      errors.confirmpassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <div className='formsfield'>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>USERNAME</Label>
                  <Input
                    type='text'
                    id='input-field'
                    name='username'
                    value={formdata.username}
                
                    onChange={handleChange}
                  />
                  {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}<br/>
                  <Label>CREATE PASSWORD</Label>
                  <Input
                    type='password'
                    id='password-field'
                    name='password'
                    value={formdata.password}
                    
                    onChange={handleChange}
                  />
                  {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br/>
                  <Label>CONFIRM PASSWORD</Label>
                  <Input
                    type='password'
                    id='confirmpassword'
                    name='confirmpassword'
                    value={formdata.confirmpassword}
                   
                    onChange={handleChange}
                  />
                  {errors.confirmpassword && (   
                    <span style={{ color: 'red' }}>{errors.confirmpassword}</span>
                  )}
                  <br />
                  <Button type='submit'>Submit</Button>{' '}
                  <Link to='/login'>Already signed in? Go to login page</Link>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
