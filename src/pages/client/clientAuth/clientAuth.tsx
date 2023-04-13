import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "../../../API/axios";
import Loading from "../../../components/loading/loading";

const ClientAuth = () => {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");
        setAuth(true);
      } catch {
        navigate("/login");
      }
    };

    fetchData();

  }, []);
  

  return (
    <>
      {!isAuth ? (
        <Loading />
      ) : (
        <Outlet/>
      )}
    </>
  );
};

export default ClientAuth;
