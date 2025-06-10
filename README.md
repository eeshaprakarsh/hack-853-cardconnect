# Hackathon Backend API
This is the backend service for the Hackathon project, built with **Node.js**, **Express**, and **MongoDB Atlas**. It serves transaction data to be consumed by a frontend (React).

## Tech Stack

```bash
Node.js 18+
Express
MongoDB Atlas (via Mongoose)
Yarn v3+ (Zero-Install, PnP)
ESLint (flat config)
CORS enabled for frontend consumption
```

## Getting Started

### 1. Clone the repository

```bash
git clone git@gitlab.ftscc.net:ProdDev/copilot/cipilot-ui/hackathon-be.git
cd hackathon-be
```

### 2. Install dependencies

```bash
yarn install
```

Make sure you're using Yarn 3+ (yarn -v)

### 3. Add .env file

Create a .env file in the root:

```bash
MONGODB_URI=mongo_uri
PORT=8080
```

Never commit .env — it's in .gitignore

## Project Structure

```bash
hackathon-be/
├── models/
│   └── transaction.js      # Mongoose schema
├── routes/
│   └── transactions.js     # API route
├── db.js                   # MongoDB connection logic
├── index.js                # Main server entry point
├── .env                    # Environment variables
├── .gitignore              # Ignores env, node_modules, etc.
├── package.json            # Type: module, Yarn 3+, scripts
├── .eslint.config.js       # Flat ESLint config
├── .yarnrc.yml             # PnP configuration
├── yarn.lock               # Yarn lock file
```

## API Endpoints

```bash
GET /api/transactions
```

Returns a list of all transactions from the MongoDB collection.

Example Response:

```bash
[
  {
    "_id": "64f...abc",
    "date": "2022-10-27",
    "desc": "LES SAISONS DE CREMORNTREAL QC",
    "amount": 144.64,
    "category": "Food",
    "lat": 45.4567,
    "lng": -73.5749
  },
  ...
]
```

## Frontend Integration

Use this endpoint in the frontend:

```bash
fetch('http://localhost:8080/api/transactions')
  .then(res => res.json())
  .then(data => console.log(data));
```

Or if you're using .env in React:

```bash
REACT_APP_API_URL=http://localhost:8080

fetch(`${process.env.REACT_APP_API_URL}/api/transactions`);
```

## Development Scripts

```bash
yarn start     # Start the server
```

## Upcoming Features

```bash
POST /api/transactions to add data #to be discussed
Query/filter transactions
Pagination & search support
```

## Contributors

1. Backend: Eesha Prakarsh
2. Frontend: Dara Soumgit, Hanna Kuchynski
3. Solution design, integration and support: Anthony Kim











