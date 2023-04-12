import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./components/appBar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Client from "./pages/client/client";
import AdminProject from "./pages/admin/adminProject";
import Project from "./pages/admin/project";
import AddProject from "./pages/admin/addProject";
import SignIn from "./pages/login/signIn";
import UserProject from "./pages/client/projectBugs";
import AddBug from "./pages/client/addBug";
import Messenger from "./pages/messenger/messenger";
import axios from "./API/axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");
        setAuth(true);
      } catch {
        setAuth(false);
      }
    };

    fetchData().catch((e) => {
      setAuth(false);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ButtonAppBar isAuth={isAuth} setAuth={setAuth} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/logIn" element={<Login isAuth={isAuth} />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client/:projectId" element={<UserProject />} />
            <Route path="/client/:projectId/addBug" element={<AddBug />} />
            <Route path="/client/:projectId/messenger/:id" element={<Messenger/>}/>
            <Route path="/admin/project" element={<AdminProject />} />
            <Route path="/admin/project/addProject" element={<AddProject />} />
            <Route path="/admin/project/:id" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
