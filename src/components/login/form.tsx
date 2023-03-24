import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function BasicExample() {
  return (
    <Container className="mt-5">
      <Form className="form">
        <Form.Group className="mb-3 input-Field" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 input-Field" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 input-Field" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" className="input-Field mb-3" type="submit">
          Submit
        </Button>
        <Button variant="light" className="input-Field mb-3" type="submit"><GoogleIcon className="mx-2"/>
          Sign In With Google
        </Button>
        <Button variant="light" className="input-Field" type="submit"><GitHubIcon className="mx-2"/>
          Sign In With GitHub
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
