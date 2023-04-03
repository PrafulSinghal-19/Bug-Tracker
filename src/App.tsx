import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Client from "./pages/client/client";
import AdminProject from "./pages/admin/adminProject";
import Project from "./pages/admin/project";
import AddProject from "./pages/admin/addProject";
import SignIn from "./pages/login/signIn";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonAppBar from "./components/appBar";
function App() {
  return (
    <>
      {/* <ButtonAppBar/> */}
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/client" element={<Client />} />
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
