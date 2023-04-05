import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../API/axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBug = (): JSX.Element => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const handleSubmit = async (e: any) => {
    const newProject = {
      title: e.target.form.bugTitle.value,
      content: e.target.form.bugContent.value,
    };

    try {
      const res = await axios.post(`/project/${projectId}/addBug`, newProject);
      navigate("/client/" + projectId);
    } catch {
      navigate("/client");
    }
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
          name="bugTitle"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Project Description">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="bugContent"
          required
        />
      </FloatingLabel>
      <Button className="m-5" onClick={handleSubmit}>
        Submit form
      </Button>
    </Form>
  );
};

export default AddBug;
