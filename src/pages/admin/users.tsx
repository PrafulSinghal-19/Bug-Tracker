import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import "./adminUser.css";

const User = (props: any) => {
  const navigate = useNavigate();
  const [isAlloted, setAlloted] = useState(props.isAlloted);
  const handleClick = () => {
    isAlloted ? props.handleDelete(props.id) : props.handleAdd(props.id);
    setAlloted((prevValue:any) => !prevValue);
  }

  return (
    <Col>
      <Card className="mb-3 mt-2">
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
          className="image"
        />
        <Card.Body>
          <Card.Text
            className={"text-" + (isAlloted ? "primary" : "secondary")}
          >
            {isAlloted ? "Alloted" : "Not Alloted"}
          </Card.Text>
          <Card.Title>{props.id}</Card.Title>
          <Card.Text>{props.name}</Card.Text>
          <Card.Text>
            <Alert
              variant={isAlloted ? "danger" : "success"}
              className="text-center"
            >
              <Alert.Link onClick={()=>handleClick()}>{isAlloted ? "Remove" : "Add"}</Alert.Link>
            </Alert>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
