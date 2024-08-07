const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/create', async (req, res) => {
  const { title, description, company, location, salary } = req.body;
  const newJob = new Job({ title, description, company, location, salary });
  await newJob.save();
  res.send('Job created');
});

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.send(job);
});

module.exports = router;
