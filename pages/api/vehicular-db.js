import fs from 'fs';
import path from 'path';

// Define the path to our local JSON database file
const dbFilePath = path.join(process.cwd(), 'database-vehicular.json');

// Initialize the database with default structure if it doesn't exist
const initializeDB = () => {
  if (!fs.existsSync(dbFilePath)) {
    const initialData = { transactions: [], messages: [] };
    fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2), 'utf8');
  }
};

export default function handler(req, res) {
  try {
    initializeDB();

    if (req.method === 'GET') {
      // Leer base de datos
      const fileData = fs.readFileSync(dbFilePath, 'utf8');
      const data = JSON.parse(fileData);
      return res.status(200).json(data);
    } 
    
    if (req.method === 'POST') {
      // Escribir en base de datos
      const { transactions, messages } = req.body;
      
      const newData = {
        transactions: transactions || [],
        messages: messages || []
      };
      
      fs.writeFileSync(dbFilePath, JSON.stringify(newData, null, 2), 'utf8');
      return res.status(200).json({ success: true, message: 'Datos guardados en JSON.' });
    }

    // Método no soportado
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    
  } catch (error) {
    console.error('Error in vehicular-db API:', error);
    res.status(500).json({ error: 'Fallo al operar la base de datos JSON local.' });
  }
}
