import React,{useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Navigate,useNavigate,Link } from "react-router-dom";
import Bug from "../images/bug.svg";
import "./appBar.css"
import axios from "../API/axios";

const NavBar = (props: any) => {
  const handleLogOut = async() => {
    window.open("http://localhost:8000/auth/logout", "_self");
  }

  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");
        setAuth(true)
      } catch {
        setAuth(false);
      }
    };

    fetchData().catch((e) => { });
  });

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={Bug} className="bugImage" alt=""/>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bug Tracker
          </Typography>
          {
            isAuth ? <Button color="inherit" onClick={handleLogOut}>Log Out</Button>:<Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
          }        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;