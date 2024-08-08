// pages/api/auth/session.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const authorizationHeader = req.headers.authorization;


  const token = authorizationHeader?.split(' ')[1];


  if (!token) {
    return res.status(200).json({ authenticated: false, message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
   
    return res.status(200).json({ authenticated: true });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      
      return res.status(200).json({ authenticated: false, message: "Token expired" });
    } else if (error.name === 'JsonWebTokenError') {
      
      return res.status(200).json({ authenticated: false, message: "Invalid token" });
    } else {
      
      return res.status(200).json({ authenticated: false, message: "Token verification failed" });
    }
  }
}
