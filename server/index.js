const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

app.get('/', (req,res) => res.send("Task Manager API Running"));

app.get('/tasks', async (req,res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req,res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.json(task);
});

app.listen(5000, () => console.log("Server running on port 5000"));