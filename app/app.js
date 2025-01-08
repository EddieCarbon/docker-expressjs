const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/mydb';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


app.post('/addUser', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });

    await user.save();
    res.status(201).send('User added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to add user');
  }
});

// Pobierz wszystkich użytkowników z bazy danych
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch users');
  }
});

// Główny endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
