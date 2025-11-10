# Express SQLite API

A simple Express API with SQLite database for storing and retrieving messages.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## Endpoints

### GET /messages
Retrieves all messages from the database.

**Response:**
```json
[
  {
    "id": 1,
    "message": "Hello, World!",
    "created_at": "2024-01-01 12:00:00"
  }
]
```

### POST /messages
Saves a new message to the database.

**Request Body:**
```json
{
  "message": "Your message here"
}
```

**Response:**
```json
{
  "id": 1,
  "message": "Your message here",
  "created_at": "2024-01-01T12:00:00.000Z"
}
```

## Database

The database file `messages.db` will be created automatically in the same directory as `server.js`. The messages table has the following structure:

- `id`: INTEGER (Primary Key, Auto Increment)
- `message`: TEXT (Required)
- `created_at`: DATETIME (Automatically set to current timestamp)

