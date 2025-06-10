import express from 'express';
import Transaction from '../models/transaction.js';

const router = express.Router();

router.get('/', async(req,res)=>{
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;