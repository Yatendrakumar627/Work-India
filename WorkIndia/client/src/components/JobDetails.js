import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(`/api/jobs/${id}`);
      setJob(response.data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
    </div>
  );
};

export default JobDetails;
