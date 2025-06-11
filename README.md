# Hackathon(853) Backend API
A Node.js + Express + MongoDB backend for managing financial transactions with **geospatial support**. Built with Yarn Plug'n'Play (Zero Install) and ES Modules.

## Features

```bash
CRUD APIs for transaction data
GeoJSON-based location storage
Proximity search using MongoDB’s `$near`
Migration script to upgrade old data
Yarn Plug'n'Play (no `node_modules`)
Dotenv for environment management
ESLint & GitLab CI support
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
    "location": {
      "type": "Point",
      "coordinates": [-73.57490532, 45.49586357]
    },
    "_id": "68486c0197b0a1edbf40ab61",
    "filter": 5,
    "id": 1,
    "date": "2022-10-27",
    "desc": "RESTO LES SAISONS DE COREMONTREAL QC",
    "amount": -14.64,
    "category": "Food"
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











