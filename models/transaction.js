import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    id: Number,
    date: String,
    desc: String,
    amount: Number,
    category: String,
    lat: Number,
    lng: Number
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;