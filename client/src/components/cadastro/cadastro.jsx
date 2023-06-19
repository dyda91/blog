import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import "./cadastro.css"

function Cadastro() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)

        try {
          
          const baseURL = "http://localhost:3000/api/auth/register";
          const res = await axios.post(baseURL, 
          {
              username,
              email,
              password
          })

          res.data && window.location.replace("/")

        } catch (error) {
          setError(true)

        }
       
    }

  return (
    <>
    <Form className='form' onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Usuário:
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' name='user' defaultValue="usuário" onChange={e=>setUsername(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Email:
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' name='email' defaultValue="email@examplo.com" onChange={e=>setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Senha:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" name='password' placeholder="********" onChange={e=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>

      <Button variant="success" type='submit' >Cadastrar</Button>{' '}
      
    </Form>
    {error && <span className='erroCadastro'>Username ou email ja cadastrado!</span>}
    </>
  );
}

export default Cadastro;