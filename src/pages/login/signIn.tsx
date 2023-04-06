import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "../../API/axios";

function BasicExample() {
  const navigate = useNavigate();
  const handleClick = async (e: any) => {
    e.preventDefault();
    const user = {
      username: e.target.form.email.value,
      name: e.target.form.name.value,
      password: e.target.form.password.value,
    };
    try {
      const res = await axios.post("/auth/signIn", user);
      navigate("/login");
    } catch {
      navigate("/logIn", { state: { error: "The user already exists" } });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");
        navigate("/client");
      }
      catch {
      }
    }
    fetchData().catch((e) => console.log(e));
  }, []);

  return (
    <Container className="mt-5 max-wid">
      <Form className="form">
        <Form.Group className="mb-3 input-Field" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 input-Field" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 input-Field" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 input-Field" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
