
import nc from 'next-connect';
import upload from '@/lib/multerConfig';

const handler = nc({
  onError(error, req, res) {
    res.status(500).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(404).json({ error: 'Endpoint not found' });
  },
});

handler.use(upload.single('cvUpload')).post((req, res) => {

  console.log(req.file); 

  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

export default handler;
