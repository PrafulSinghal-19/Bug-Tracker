import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "../../API/axios";
import User from "./users";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./adminUser.css";
import Icon from "../../components/icon";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [Users, setUsers] = useState([]);
  const [usersId, setUsersId] = useState([]);

  useEffect(() => {
    const getAllottedUsers = async () => {
      try {
        const result = await axios.get("/admin/project/" + id)
        console.log(result.data[0].users)
        setUsersId(result.data[0].users);
        try {
          const res = await axios.post("/user/search", { search: "" });
          console.log(res.data)
          setUsers(res.data);
        }
        catch(err){}
      }
      catch(err){}
    }

    getAllottedUsers();
    
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
    const res = await axios.post("/user/search", { search: e.target.value });
    setUsers(res.data);
  };

  const printUsers = (user) => {
    let isAlloted = false;
    
    usersId.forEach((userId) => {
      if (userId._id === user._id) isAlloted = true;
    })

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
