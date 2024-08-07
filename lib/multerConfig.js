// lib/multerConfig.js
const multer = require('multer');
const path = require('path');

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    const filename = `${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

module.exports = upload;
