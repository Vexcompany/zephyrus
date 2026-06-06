# Zephyrus Music - Setup Guide

## Prerequisites

- Node.js v16 or higher
- npm or yarn
- MongoDB (local or cloud instance)
- HuggingFace account (for dataset access)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Vexcompany/zephyrus.git
cd zephyrus
```

### 2. Install Root Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 5. Set Up Environment Variables

Copy the `.env.example` file to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with:
- Your MongoDB connection string
- Your HuggingFace API key
- Backend port (default: 5000)

### 6. Start Development Servers

```bash
npm run dev
```

This will start both the frontend (http://localhost:3000) and backend (http://localhost:5000) simultaneously.

## Individual Development

### Frontend Only

```bash
cd frontend
npm run dev
```

### Backend Only

```bash
cd backend
npm run dev
```

## Building for Production

```bash
npm run build
```

This will build both frontend and backend.

## Using the HuggingFace Dataset

The Music dataset from `nekoyama12/Music` contains:
- Track information
- Artist details
- Genre classifications
- Audio metadata

To integrate the dataset:

1. Get your HuggingFace API token
2. Update `HUGGINGFACE_API_KEY` in `.env.local`
3. The backend will fetch and cache the dataset

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or connection string is correct
- Test with: `mongosh "mongodb://localhost:27017"`

### HuggingFace API Errors
- Verify your API key is correct
- Check dataset availability and access permissions

### Port Already in Use
- Change `BACKEND_PORT` in `.env.local`
- Change frontend port in `frontend/next.config.js` or use: `npm run dev -- -p 3001`

## Next Steps

- Configure dataset integration in `/backend/src/services/dataset.ts`
- Build the music API endpoints in `/backend/src/routes/`
- Add more pages and components in `/frontend/app/`
