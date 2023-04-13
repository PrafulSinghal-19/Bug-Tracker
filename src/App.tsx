import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./components/appBar/appBar";
import Home from "./pages/client/home/home";
import Login from "./pages/client/login/login";
import ClientAuth from "./pages/client/clientAuth/clientAuth";
import AdminProject from "./pages/admin/adminProject";
import Project from "./pages/admin/project";
import AddProject from "./pages/admin/addProject";
import SignIn from "./pages/client/signin/signin";

import UserProject from "./pages/client/bugs/projectBugs";
import ClientMainPage from "./pages/client/clientMainPage/client";
import AddBug from "./pages/client/bugs/addBug";
import Messenger from "./pages/client/messenger/messenger";
import axios from "./API/axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuth, setAuth] = useState(true);
  
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar isAuth={isAuth} setAuth={setAuth} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/logIn" element={<Login isAuth={isAuth} />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/client" element={<ClientAuth />}>
              <Route path="" element={<ClientMainPage />} />
              <Route path=":projectId" element={<UserProject />} />
              <Route path=":projectId/addBug" element={<AddBug />} />
              <Route path=":projectId/messenger/:id" element={<Messenger />} />
            </Route>
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
