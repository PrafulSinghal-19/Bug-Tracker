import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "../../API/axios";

const AdminProject = (): JSX.Element => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const handleClick=()=>navigate("/admin/project/addProject")
    useEffect(() => {
        const res = axios.get("/projects");
        res.then(val => setProjects(val.data));
    }, []);
    return (
        <>
            <Button variant="primary" className="m-5" onClick={handleClick}>Add</Button>
        </>
    )
}

export default AdminProject;