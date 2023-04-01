import React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "../../API/axios";
import User from "./users";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./adminUser.css";
import Icon from "./icon";

const AdminUser = (): JSX.Element => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const res = axios.post("/searchData", { search: '' });
      res.then((val) => setUsers(val.data));
  },[]);
  const handleChange = async (e: any) => {
    const res = await axios.post("/searchData", { search: e.target.value });
    console.log(res.data);
    setUsers(res.data);
  };

  const printUsers = (user: any) => {
    return <User key={user._id} id={user._id} name={user.name}></User>;
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
      <Row md={2} lg={4} className="g-4">
        {Users.map(printUsers)}
      </Row>
    </div>
  );
};

export default AdminUser;
