import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import './CreateJob.css';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { title, description, company, location, salary };
    try {
      const response = await axios.post('/api/jobs/create', jobData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="create-job-form">
      <Typography variant="h4" component="h1" gutterBottom>
        Create a New Job
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Salary"
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Job
        </Button>
      </form>
    </Container>
  );
};

export default CreateJob;
