const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Add this route to avoid "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Login backend is running on Railway!');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid credentials" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
