import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <div className="banner">
        <Typography variant="h2">Find Your Dream Job</Typography>
        <Typography variant="h6">Thousands of jobs are waiting for you</Typography>
        <Button variant="contained" color="primary" component={Link} to="/jobs">Search Jobs</Button>
      </div>
    </Container>
  );
};

export default Home;
