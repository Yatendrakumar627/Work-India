import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <Typography variant="h6" className="navbar-logo">
          WorkIndia
        </Typography>
        <div className="nav-menu">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
          <Button color="inherit" component={Link} to="/create-job">Post a Job</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
