import * as React from "react";
import "./login.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink, Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import LoginOAuth2 from "@okteto/react-oauth2-login";
import { useEffect, useState } from "react";
import axios from "../../../API/axios";

interface UserObject {
  name: String;
  sub: String;
  picture: String;
}

export default function FormPropsTextFields(props:any) {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const user = {
      email: e.target.form.email.value,
      password: e.target.form.password.value,
    };

    const res = axios.post(`/auth/logIn`, { username:e.target.form.email.value,password:e.target.form.password.value });

    res.then(() => {
      navigate("/client")
    }).catch(() => {
      console.log("Error")
    });
  };

  const Google_oauth = async () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };
  
  const Github_oauth = async() => {
    window.open("http://localhost:8000/auth/github", "_self");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");     
        navigate("/client")
      }
      catch {
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h2 className="login-heading">Login Page</h2>
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
          className="input-Field mb-1"
          type="submit"
          onClick={handleLogin}
        >
          Submit
        </Button>
        
        <div style={{ margin: 10 }}></div>
        <Button
          variant="danger"
          className="input-Field mb-1"
          onClick={Google_oauth}
        >
          <GoogleIcon className="m-1" />
          Sign In Using Google
        </Button>

        <div style={{ margin: 10 }}></div>

        <Button
          variant="secondary"
          className="input-Field mb-1"
          onClick={Github_oauth}>
          <GitHubIcon className="m-1" />
          Sign In Using Github
        </Button>
      </Form>
    </Container>
    </>
  );
}

