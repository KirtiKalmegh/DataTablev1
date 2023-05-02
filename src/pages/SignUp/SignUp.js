import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignUp() {
  return (
    <Container className='w-50 p-3'>
      <Form>
        <Row xs={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row xs={12}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
      <Row xs={12}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Row>
    </Form>
    </Container>
    
  );
}

export default SignUp;