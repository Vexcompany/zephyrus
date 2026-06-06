'use client';

import { Music, Search, Heart, Play } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-purple-900 to-dark text-light">
      {/* Header */}
      <header className="border-b border-purple-800 sticky top-0 z-50 bg-dark/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">Zephyrus Music</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-primary transition">Home</a>
            <a href="#" className="hover:text-primary transition">Explore</a>
            <a href="#" className="hover:text-primary transition">Favorites</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Discover Your Next Favorite Song
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Explore thousands of tracks from the Zephyrus Music Library
          </p>

          {/* Search Bar */}
          <div className="flex gap-3 max-w-2xl mx-auto mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search songs, artists, albums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-purple-900/30 border border-purple-700 rounded-lg pl-12 pr-4 py-3 text-light placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button className="bg-primary hover:bg-primary/80 transition px-8 py-3 rounded-lg font-semibold">
              Search
            </button>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Featured Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 hover:border-primary transition cursor-pointer group">
                <div className="bg-purple-800 rounded-lg h-40 mb-4 flex items-center justify-center group-hover:bg-primary transition">
                  <Play className="w-12 h-12 text-light" fill="currentColor" />
                </div>
                <h4 className="font-semibold mb-2">Track Title {i}</h4>
                <p className="text-gray-400 text-sm">Artist Name</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-primary/20 hover:bg-primary hover:text-dark transition text-primary py-2 rounded flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" fill="currentColor" /> Play
                  </button>
                  <button className="bg-red-500/20 hover:bg-red-500 transition text-red-400 hover:text-light py-2 px-4 rounded">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-8 text-center">
          <Music className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">More Features Coming Soon</h3>
          <p className="text-gray-400">
            We're loading the music dataset and building amazing features for you!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800 mt-20 py-8 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Zephyrus Music. Built with ❤️ by Vexcompany</p>
        </div>
      </footer>
    </div>
  );
}
