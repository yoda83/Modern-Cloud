// Import React
import React from 'react';

// Hero image import
import fantasyHero from './assets/stlfullstackers.jpg';

// Main App component
function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">

      {/* Hero Section */}
      <div className="w-full h-screen bg-primaryYellow flex items-center justify-center">
        <img src={fantasyHero} alt="STLFullStackers Hero" className="w-full h-auto" />
      </div>

      {/* Navbar/Header Section */}
      <nav className="w-full bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl">STLFullStackers</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-primaryBrown">STLFullStackers</h1>
        <p className="mt-4 text-lg text-primaryBlue">Welcome to the world of Fantasy Football, where full-stack developers make the difference!</p>
        <button className="mt-8 px-6 py-3 bg-primaryGreen text-white rounded-full">Join the Game</button>
      </div>
    </div>
  );
}

export default App;
