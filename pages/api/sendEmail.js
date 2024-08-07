import connectToDatabase  from '../../utils/db';
import Project from '../../models/project';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, company, email, telephone, message } = req.body;
  
      if (!name || !company || !email || !message) {
        return res.status(400).json({ error: 'Name, company, email, and message are required' });
      }
  
      try {
        await connectToDatabase();
  
        const project = new Project({
          name,
          company,
          email,
          telephone,
          message,
        });
  
        const savedProject = await project.save();
  
        return res.status(201).json({ success: true, project: savedProject });
      } catch (error) {
        console.error('Error saving data:', error);
        return res.status(500).json({ error: 'Failed to save data' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }