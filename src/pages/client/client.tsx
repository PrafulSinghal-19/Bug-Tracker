import React from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import axios from "../../API/axios";
import Project from "./projects";
import "./client.css";

const Client = (): JSX.Element => {
  const [projects, setProjects] = useState([]);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const printProjects = (project: any) => {
    return (
      <Project
        title={project.title}
        content={project.content}
        key={project._id}
        id={project._id}
      ></Project>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");
      } catch {
        navigate("/login")
      }
    };

    fetchData().catch((e) => {
      navigate("/login");
    });
    
    try {
      axios("/user").then((val) => {
        setProjects(val.data.projects);
        setUsername(val.data.name);
      });
    } catch {
      setProjects([]);
    }
  }, []);

  return (
    <div className="clientBody">
      <h4 style={{ textAlign: "left", marginBottom: "30px" }}>
        Hello {username}
      </h4>
      <Row md={2} lg={3} className="g-4">
        {projects.map(printProjects)}
      </Row>
    </div>
  );
};

export default Client;
