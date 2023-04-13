import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const User = (props: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
      props.clicked(props.id);
  };

  return (
    <Col>
      <Card className="mb-3 mt-2" onClick={handleClick}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
