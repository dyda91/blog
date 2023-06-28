import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useContext, useRef } from 'react';
import axios from 'axios';
import "./login.css"
import  { Context }  from '../../context/context';
import React from 'react';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef(); 
  const { user, dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
   e.preventDefault();
   dispatch({type:"LOGIN_START"});
   
   try {
      const baseURL = "http://localhost:3000/api/auth/login";
      const res = await axios.post(baseURL, {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      console.log(userRef.current.value,)
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
      window.location.replace("/")
   } catch (error) {
    dispatch({type:"LOGIN_FAILURE"});
   }
  }
  console.log(user)
  return (
    <Form className='form' onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Username:
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='username' name='username' ref={userRef}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Senha:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" name='password' placeholder="********" ref={passwordRef} />
        </Col>
      </Form.Group>

      <Button variant="success" type='submit' disabled={isFetching}>Entrar</Button>{' '}
    </Form>
  );
}

export default Login;