import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../API/axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddProject = (): JSX.Element => {
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.form.projectTitle.value);

    const newProject = {
      title: e.target.form.projectTitle.value,
      content: e.target.form.projectContent.value,
    };
    console.log(newProject);

    const res = axios.post("/admin/addProject",newProject);
    res.then(() => navigate("/admin/project")).catch(()=>alert("The project already exists. Please try again"));
  };
  return (
    <Form className="text-center m-4">
      <FloatingLabel
        controlId="floatingTextarea"
        label="Project Title"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          className="required"
          placeholder="Leave a comment here"
          name="projectTitle"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Project Description">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="projectContent"
          required
        />
      </FloatingLabel>
      <Button type="submit" className="m-5" onClick={handleSubmit}>
        Submit form
      </Button>
    </Form>
  );
};

export default AddProject;
