// Load dependencies
const path = require('path');
const express = require('express');
const animals = require('./animals');

// Create express app
const app = express();

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Individual Animal pages
app.get('/gallery/:id',function(req, res){
  res.send(`<img src="https://picsum.photos/id/${req.params.id}/750" alt="Lorem Picsum Image">`)
});

// JSON GET endpoint
app.get('/api/gallery', function(req, res){
  // const animals = [237, 433, 577, 582, 593, 659, 718, 783, 790, 837, 1024, 1025, 1074, 1084];
  res.json(animals);
});

// Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});