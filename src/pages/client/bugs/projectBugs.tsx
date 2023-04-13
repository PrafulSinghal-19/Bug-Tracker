import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Bugs from "./components/bugs";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "../../../API/axios";

const ProjectBugs = (): JSX.Element => {
  const [bugs, setBugs] = useState([]);
  const [projectName, setProjectName] = useState("");
  const { projectId } = useParams();

  const navigate = useNavigate();

  const clicked = (id:any)=>{
    navigate(`/client/${projectId}/messenger/${id}`);
  }

  const handleClick = () => {
    navigate(`/client/${projectId}/addBug`);
  };

  const printBugs = (bug: any) => {
    return (
      <Bugs
        id={bug._id}
        key={bug._id}
        title={bug.title}
        content={bug.content}
        clicked={clicked}
      />
    );
  };

  useEffect(() => {

    const getData = async () => {
      try {
        const res = await axios.get(`/project/${projectId}`);
        setBugs(res.data.bugs);
        setProjectName(res.data.title);
      } catch {
        navigate("/client");
      }
    };
    getData();
    
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <h4>{projectName}</h4>

      <Row md={2} lg={3} className="g-4">
        {bugs.map(printBugs)}
      </Row>

      <Button variant="primary" className="mt-5" onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default ProjectBugs;
