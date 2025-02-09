import dbConnect from '../../../utils/database';
import { createContact } from '../../../utils/database';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const result = await createContact(req.body);
    if (result.success) {
      res.status(201).json(result);
    } else {
      res.status(400).json(result);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
