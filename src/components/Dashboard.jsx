import React from 'react';
import InventoryList from './InventoryList';

const Dashboard = () => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    return (
        <div className="bg-black min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Inventory Management Dashboard</h1>
            
            <div className="space-y-8">
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Inventory Items</h2>
                    <InventoryList items={items} suppliers={suppliers} />
                </section>

                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Suppliers</h2>
                    {suppliers.length > 0 ? (
                        <ul className="list-disc list-inside space-y-2">
                            {suppliers.map((supplier, index) => (
                                <li key={index} className="text-gray-800">
                                    {supplier.name} - {supplier.contact}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No suppliers available.</p>
                    )}
                </section>
            </div>

            <footer className="mt-8 text-center text-gray-600">
                Inventory Management System © {new Date().getFullYear()}
            </footer>
        </div>
    );
};

export default Dashboard;
