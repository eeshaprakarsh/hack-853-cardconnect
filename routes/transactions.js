import express from 'express';
import Transaction from '../models/transaction.js';
const router = express.Router();

// GET all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single transaction by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findOne({ id: Number(id) });
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE a new transaction
router.post('/', async (req, res) => {
  try {
    const { id, date, desc, amount, category, location } = req.body;
    const transactionData = { id, date, desc, amount, category };
    if (location?.lng && location?.lat) {
      transactionData.location = {
        type: 'Point',
        coordinates: [location.lng, location.lat],
      };
    }
    const transaction = new Transaction(transactionData);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a transaction by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Transaction.findOneAndUpdate(
      { id: Number(id) }, // or use _id
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a transaction by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Transaction.findOneAndDelete({ id: Number(id) });
    if (!deleted) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/transactions/nearby
router.post('/nearby', async (req, res) => {
  const { location } = req.body;
  if (!location?.lat || !location?.lng || !location?.radius) {
    return res.status(400).json({ message: 'lng, lat, and radius are required' });
  }
  const radiusInMeters = location.radius * 1609.34;
  try {
    const nearby = await Transaction.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [location.lng, location.lat],
          },
          $maxDistance: radiusInMeters,
        },
      },
    });
    res.json(nearby);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default router;
