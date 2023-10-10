const express = require('express');
const router = express.Router();

// Define routes for each page

// Home Page
router.get('/', (req, res) => {
  res.render('home');
});

// About Page
router.get('/aboutMe', (req, res) => {
  res.render('aboutMe');
});

// Service Page
router.get('/services', (req, res) => {
    res.render('services');
  });
  
  
// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects');
});

// Services Page
router.get('/services', (req, res) => {
  res.render('services');
});

// Contact Page
router.get('/contacts', (req, res) => {
  res.render('contacts');
});

module.exports = router;