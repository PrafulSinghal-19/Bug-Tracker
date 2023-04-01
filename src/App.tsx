import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Client from "./pages/client/client";
import AdminUser from "./pages/admin/adminUser";
import AdminProject from "./pages/admin/adminProject";
import User from "./pages/admin/user";
import AddProject from "./pages/admin/addProject";

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
            <Route path="/login" element={<Login />} />
            <Route path="/client" element={<Client />} />
            <Route path="/admin/user" element={<AdminUser />} />
            <Route path="/admin/user/:id" element={<User />} />
            <Route path="/admin/project" element={<AdminProject />} />
            <Route path="/admin/project/addProject" element={<AddProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
