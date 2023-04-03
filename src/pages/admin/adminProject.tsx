import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import axios from "../../API/axios";
import Project from "./projects";

const AdminProject = (): JSX.Element => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const handleClick = () => navigate("/admin/project/addProject");

  useEffect(() => {
    axios.get("/admin/project").then((val) => setProjects(val.data));
  }, []);

  const printProjects = (project: any) => {
    return (
      <Project key={project._id} id={project._id} title={project.title} content={project.content} />
    );
  };

  return (
    <div style={{margin:20}}>
      <Row md={2} lg={4} className="g-4">
        {projects.map(printProjects)}
      </Row>
      <Button variant="primary" className="mt-2" onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default AdminProject;
