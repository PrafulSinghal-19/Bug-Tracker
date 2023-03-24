import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import Bug from "../../images/bug.svg";
import "./appBar.css"

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={Bug} className="bugImage" alt=""/>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bug Tracker
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}