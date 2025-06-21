import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600">View Items</Link>
        <Link to="/add" className="text-blue-600">Add Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </div>
  );
}
