// pages/api/auth/session.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1]; // Expecting the token in the Authorization header

  if (!token) {
    return res.status(200).json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET); // Replace with your secret or public key
    return res.status(200).json({ authenticated: true });
  } catch (error) {
    // Token is expired or invalid
    return res.status(200).json({ authenticated: false });
  }
}
