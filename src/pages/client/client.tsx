import React from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import isLoggedIn from "../../middleware/auth";
import axios from "../../API/axios";
import Projects from "./projects";

const Client = (): JSX.Element => {
  const navigate = useNavigate();
  const [checkLogin, setCheckLogin] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const createProjects = (project: any) => {
    console.log(project)
    return <Projects projectValue={project}></Projects>
  }

  useEffect(() => {
    // const getData = async () => {
    //   const fetchData = async (code: any) => {
    //     const res = await axios.post(`/fetchData`, { code: code });
    //     return res.data;
    //   };

    //   let code = searchParams.get("code");

    //   if (code != null) {
    //     const res = await fetchData(code);
    //     localStorage.setItem("user", res);
    //     navigate("/client");
    //   }

    //   console.log("Done with the access token");
    // };

    // getData();

    // console.log(location.state);

  //   const login = isLoggedIn();
  //   if (!login) {
  //     navigate("/login");
  //   }
  //   setCheckLogin(login);
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Client;
