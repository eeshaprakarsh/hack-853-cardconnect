# Hackathon(853) Backend API
A Node.js + Express + MongoDB backend for managing Credit Card transactions with **geospatial support**. Built with Yarn Plug'n'Play and ES Modules.

## Features

```bash
CRUD APIs for transaction data
GeoJSON-based location storage
Proximity search using MongoDB’s `$near`
CORS enabled for frontend consumption
Yarn v3+ (no `node_modules`, Zero-Install, PnP)
Migration script to upgrade old data in MongoDb (File name: migrateLocation.js)
Dotenv for environment management
ESLint support
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

## Development Scripts

```bash
yarn start               # Start the server
yarn eslint .            # Check Lint errors and warnings
yarn eslint . --fix      # Fix lint errors 
```

## API Endpoints

### 1. GET all transactions

```bash
GET /api/transactions
```

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

### 2. GET a single transaction by ID

```bash
GET /api/transactions/:id
```

### 3. CREATE a new transaction

```bash
POST /api/transactions
```

### 4. UPDATE a transaction by ID

```bash
PUT /api/transactions/:id
```

### 5. DELETE a transaction by ID

```bash
DELETE /api/transactions/:id
```

### 6. Filter transactions by location 

```bash
POST /api/transactions/nearby
```

Example Payload:

```bash
{
    location: {
        lng: -73.57799065,
        lat: 45.49675911,
        radius: 30  // miles
    }
}
```

Example Response:

```bash
[
  {
    "location": {
      "type": "Point",
      "coordinates": [-73.57490532, 45.49586357]  //[lng, lat]
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

## Contributors

1. **Backend:** Eesha Prakarsh
2. **Frontend:** Dara Soumgit, Hanna Kuchynski
3. **Solution design, integration and support:** Anthony Kim











