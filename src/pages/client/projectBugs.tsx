import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectBug from "./projects";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "../../API/axios";

const ProjectBugs = (): JSX.Element => {
  const [bugs, setBugs] = useState([]);
  const [projectName, setProjectName] = useState("");
  const { projectId } = useParams();

  const navigate = useNavigate();
  const printBugs = (bug: any) => {
      return <ProjectBug id={ bug._id} key={bug._id} title={bug.title} content={bug.content} />;
  };

  const handleClick = () => {
    navigate(`/client/${projectId}/addBug`);
  };

  useEffect(() => {
    axios
      .get(`/project/${projectId}`)
      .then((val) => {
        setBugs(val.data.bugs);
        setProjectName(val.data.title);
      })
      .catch((e) => navigate("/client"));
  }, []);

  return (
    <>
      <h4>{projectName}</h4>

      <Row md={2} lg={3} className="g-4">
        {bugs.map(printBugs)}
      </Row>
      <Button variant="primary" className="mt-2" onClick={handleClick}>
        Add
      </Button>
    </>
  );
};

export default ProjectBugs;
