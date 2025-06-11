import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Transaction from './models/transaction.js';

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);
console.log(':white_check_mark: Connected to MongoDB');

// const transactions = await Transaction.find();

// let migratedCount = 0;
// for (const tx of transactions) {
//   const hasLatLng = typeof tx.lat === 'number' && typeof tx.lng === 'number';
//   const hasValidLocation =
//     tx.location?.type === 'Point' &&
//     Array.isArray(tx.location?.coordinates) &&
//     tx.location.coordinates.length === 2;
//   console.log(`:test_tube: ${tx._id}`);
//   console.log(`   lat: ${tx.lat}, lng: ${tx.lng}`);
//   console.log(`   hasLatLng: ${hasLatLng}, hasValidLocation: ${hasValidLocation}`);

//   if (!hasValidLocation && hasLatLng) {
//     tx.location = {
//       type: 'Point',
//       coordinates: [tx.lng, tx.lat],
//     };
//     tx.lat = undefined;
//     tx.lng = undefined;
//     tx.markModified('location');
//     await tx.save();
//     console.log(`:white_check_mark: Migrated: ${tx._id}`);
//     migratedCount++;
//   } else {
//     console.log(`:black_right_pointing_double_triangle_with_vertical_bar: Skipped: ${tx._id}`);
//   }

// }

console.log(`:tada: Migration complete. Total migrated: ${migratedCount}`);
process.exit();