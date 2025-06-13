import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    id: Number,
    date: String,
    desc: String,
    amount: Number,
    category: String,
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true
      }
    }
  });

transactionSchema.index({location: '2dsphere'});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;