import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "../../API/axios";
import User from "./users";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./adminUser.css";
import Icon from "./icon";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [Users, setUsers] = useState([]);
  const [usersId, setUsersId] = useState([]);

  useEffect(() => {
    const res = axios.post("/user/search", { search: "" });
    axios.get("/admin/project/" + id).then((val) => {
      setUsersId(val.data[0].users);
      res.then((val) => setUsers(val.data));
    });
  }, []);

  const handleAdd = async (objectId) => {
    const arr = [...usersId, objectId];
    setUsersId(arr);
    axios.patch("/user/addProject/" + objectId, { id: id });
    axios.patch("/project/addUser/" + id, { id: objectId });
  };

  const handleDelete = async (objectId) => {
    const arr = usersId.filter((userId) => {
      return (userId != objectId);
    });
    setUsersId(arr);
    axios.patch("/user/deleteProject/" + objectId, { id: id });
    axios.patch("/project/deleteUser/" + id, { id: objectId });
  };

  const handleChange = async (e) => {
    const res = await axios.post("/searchData", { search: e.target.value });
    console.log(res.data);
    setUsers(res.data);
  };

  const printUsers = (user) => {
    let isAlloted = false;
    if (usersId.includes(user._id)) isAlloted = true;
    return (
      <User
        key={user._id}
        id={user._id}
        name={user.name}
        isAlloted={isAlloted}
        projectId={id}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      ></User>
    );
  };

  return (
    <div className="admin">
      <TextField
        id="standard-basic"
        label={<Icon />}
        variant="standard"
        onChange={handleChange}
        className="searchBar"
      />
      <Row md={2} lg={3} className="g-4">
        {Users.map(printUsers)}
      </Row>
    </div>
  );
};

export default Project;
