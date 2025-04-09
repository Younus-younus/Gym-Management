import React from 'react';
import { Menu, Dumbbell, Users, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;