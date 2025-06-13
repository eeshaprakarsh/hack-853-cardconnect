import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './db.js';
import TransactionRoute from './routes/transactions.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/transactions', TransactionRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log('Server Running at port: ' + PORT);
});