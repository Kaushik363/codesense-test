const express = require('express');
const app = express();

const dbPassword = "admin12345";
const API_KEY = "sk-abcdefghijklmnopqrstuvwxyz123456";

app.get('/user', async (req, res) => {
  console.log("fetching user", req.query.id);
  try {
    const result = await db.query("SELECT * FROM users WHERE id = " + req.query.id);
    res.send(result);
  } catch (e) {
  }
});

app.listen(3000);
