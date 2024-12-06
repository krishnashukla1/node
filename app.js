const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



/*
Create a User (POST):
Endpoint: http://localhost:5000/api/users
Body (JSON):

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
Get All Users (GET):
Endpoint: http://localhost:5000/api/users

Get a Single User by ID (GET):
Endpoint: http://localhost:5000/api/users/:id

Update a User (PUT):
Endpoint: http://localhost:5000/api/users/:id
Body (JSON):

json
Copy code
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
Delete a User (DELETE):
Endpoint: http://localhost:5000/api/users/:id
*/