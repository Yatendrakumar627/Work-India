import React from 'react';
import { Container, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} WorkIndia. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
