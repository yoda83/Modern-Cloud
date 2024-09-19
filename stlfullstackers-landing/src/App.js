import React from 'react';
import './App.css'; // Ensure Tailwind styles are imported
import footballHero from './assets/footballHero.jpg';


function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${footballHero})` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold">Welcome to STLFullStackers</h1>
            <p className="mt-4 text-2xl">Join the Game</p>
            <button className="mt-8 px-6 py-3 bg-primaryGreen text-white rounded-full">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
