import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the jobs!', error);
      });
  }, []);

  return (
    <Container className="job-list">
      {jobs.map(job => (
        <Card key={job._id} className="job-item">
          <CardContent>
            <Typography variant="h5">{job.title}</Typography>
            <Typography variant="body2">{job.company}</Typography>
            <Typography variant="body2">{job.location}</Typography>
            <Button component={Link} to={`/jobs/${job._id}`} className="view-details">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default JobList;
