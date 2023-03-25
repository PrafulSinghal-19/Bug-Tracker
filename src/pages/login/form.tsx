import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GoogleLogin } from "@react-oauth/google";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

interface UserObject{
  name: String,
  sub: String,
  picture:String
}

function BasicExample() {
  const navigate = useNavigate();

  const responseGoogle = (response:any) => {
    //console.log(response);
     const userObject:UserObject = jwt_decode(response.credential);
     console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    
      navigate('/client')
 
   }
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

        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => { navigate('/login'); console.log("on error") }}
        />
        <div style={{margin:10}}></div>
        <Button variant="light" className="input-Field" type="submit">
          <GitHubIcon className="mx-2" />
          Sign In With GitHub
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
