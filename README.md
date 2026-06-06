# Zephyrus Music 🎵

A modern music streaming website built with the nekoyama12/Music dataset from Hugging Face.

## Features

- 🎵 Browse and stream music tracks
- 🔍 Search and filter music by artist, genre, and more
- ❤️ Save favorite tracks
- 📊 Music recommendations
- 🌙 Dark/Light mode support
- 📱 Responsive design

## Tech Stack

### Frontend
- React 18+
- Next.js
- Tailwind CSS
- React Query

### Backend
- Node.js / Express.js
- MongoDB
- HuggingFace Datasets API

## Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn
- MongoDB

### Installation

```bash
# Clone the repository
git clone https://github.com/Vexcompany/zephyrus.git
cd zephyrus

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## Dataset

This project uses the Music dataset from Hugging Face:
- Dataset: [nekoyama12/Music](https://huggingface.co/datasets/nekoyama12/Music)

## Project Structure

```
zephyrus/
├── frontend/          # Next.js frontend application
├── backend/           # Express.js backend server
├── public/            # Static assets
└── docs/              # Documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Author

Created by Vexcompany
