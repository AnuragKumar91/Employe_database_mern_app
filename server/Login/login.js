// routes/login.js

import express from "express";

const router = express.Router();


router.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Here you can perform basic checks, such as ensuring both email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Simulate a successful login
  res.json({ message: "Login successful" });
});

export default router;

