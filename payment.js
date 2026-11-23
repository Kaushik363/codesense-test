const express = require('express');
const helmet = require('helmet');
const userService = require('./userService');
const jwt=require('jsonwebtoken')

const app = express();
app.use(helmet());

const MAX_ID = 1000000;

app.get('/user', async (req, res) => {
  const id = Number(req.query.id);
  if (!Number.isInteger(id) || id <= 0 || id > MAX_ID) {
    return res.status(400).json({ error: 'Invalid id' });
  }
  try {
    const user = await userService.getById(id);
    res.status(200).json(user);
  } catch (err) {
    console.error('Failed to load user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(process.env.PORT);
