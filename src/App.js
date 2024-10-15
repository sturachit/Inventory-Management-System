import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InventoryForm from './components/InventoryForm';
import SupplierForm from './components/SupplierForm';
import Header from './components/Header';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-center text-red-800 mb-8">
          Inventory Management System
        </h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-inventory" element={<InventoryForm />} />
          <Route path="/edit-inventory" element={<InventoryForm />} />
          <Route path="/add-supplier" element={<SupplierForm />} />
         
        </Routes>
      </main>
    </div>
  );
};

export default App;
