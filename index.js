const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
