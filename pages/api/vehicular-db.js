import fs from 'fs';
import path from 'path';
import { db } from '../../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Define the path to our local JSON database file (Fallback)
const dbFilePath = path.join(process.cwd(), 'database-vehicular.json');

// Initialize the database with default structure if it doesn't exist
const initializeDB = () => {
  if (!fs.existsSync(dbFilePath)) {
    const initialData = { transactions: [], messages: [] };
    fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2), 'utf8');
  }
};

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      if (db) {
        // Firebase Firestore
        const docRef = doc(db, 'vehicular', 'data');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return res.status(200).json(docSnap.data());
        } else {
          return res.status(200).json({ transactions: [], messages: [] });
        }
      } else {
        // Local JSON Fallback
        initializeDB();
        const fileData = fs.readFileSync(dbFilePath, 'utf8');
        const data = JSON.parse(fileData);
        return res.status(200).json(data);
      }
    } 
    
    if (req.method === 'POST') {
      const { transactions, messages } = req.body;
      const newData = {
        transactions: transactions || [],
        messages: messages || []
      };

      if (db) {
        // Escribir en Firebase Firestore
        const docRef = doc(db, 'vehicular', 'data');
        await setDoc(docRef, newData);
        return res.status(200).json({ success: true, message: 'Datos guardados en Firebase Firestore.' });
      } else {
        // Escribir en base de datos local
        initializeDB();
        fs.writeFileSync(dbFilePath, JSON.stringify(newData, null, 2), 'utf8');
        return res.status(200).json({ success: true, message: 'Datos guardados en JSON local.' });
      }
    }

    // Método no soportado
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    
  } catch (error) {
    console.error('Error in vehicular-db API:', error);
    res.status(500).json({ error: 'Fallo al operar la base de datos.' });
  }
}
