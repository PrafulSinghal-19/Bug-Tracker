import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GoogleLogin } from "@react-oauth/google";
import { NavLink, Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import LoginOAuth2 from "@okteto/react-oauth2-login";
import { useEffect, useState } from "react";
import axios from "../../API/axios";

interface UserObject {
  name: String;
  sub: String;
  picture: String;
}

function BasicExample() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const user = {
      email: e.target.form.email.value,
      password: e.target.form.password.value,
    };

    console.log(user);

    const res = await axios.post(`/user`, { user });
    
    if (res.status == 200) {
      console.log("Going to Client");
      
      localStorage.setItem("user", res.data);
      navigate("/client" ,{state:{name:res.data.name,projects:res.data.projects}})
    }
  };

  const responseGoogle = (response: any) => {
    const userObject: UserObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
    navigate("/client");
  };

  return (
    <Container className="mt-5">
      <Form className="form">
        <Form.Group className="mb-3 input-Field" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 input-Field" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3 input-Field" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          className="input-Field mb-3"
          type="submit"
          onClick={handleLogin}
        >
          Submit
        </Button>

        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            navigate("/login");
            console.log("on error");
          }}
        />
        <div style={{ margin: 10 }}></div>
        <Button
          variant="secondary"
          className="input-Field mb-3"
          onClick={() =>
          {
            console.log('OnClick is pressed');
            
            window.location.replace(
              `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000/client`
            )}
          }
        >
          <GitHubIcon className="m-2" />
          Sign In Using Github
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
