import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "./adminUser.css"

const User = (props: any) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/admin/user/" + props.id);
    }

    return (
        <Col>
           <Card className="mb-3 mt-2" onClick={handleClick}>
            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png" className="image"/>
            <Card.Body>
                    <Card.Title>{props.id}</Card.Title>
              <Card.Text>
                {props.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default User;