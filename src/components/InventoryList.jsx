import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryList = ({ items, suppliers }) => {
    const [inventory, setInventory] = useState(items);
    const navigate = useNavigate();

    // Delete item function
    const handleDelete = (index) => {
        const updatedItems = inventory.filter((_, i) => i !== index);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setInventory(updatedItems);
    };

    // Edit item function (redirect to form with the item data)
    const handleEdit = (index) => {
        const itemToEdit = inventory[index];
        localStorage.setItem('editItem', JSON.stringify({ item: itemToEdit, index }));
        navigate('/edit-inventory');
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="py-3 px-4 border-b">Item Name</th>
                            <th className="py-3 px-4 border-b">Quantity</th>
                            <th className="py-3 px-4 border-b">Category</th>
                            <th className="py-3 px-4 border-b">Supplier</th>
                            <th className="py-3 px-4 border-b">Stock Level</th>
                            <th className="py-3 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => {
                            const supplier = suppliers.find(s => s.id.toString() === item.supplierId.toString());
                            const stockLevel = item.quantity > 500 ? 'text-green-600' : 'text-red-600';
                            return (
                                <tr key={index} className="hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b">{item.name}</td>
                                    <td className="py-3 px-4 border-b">{item.quantity}</td>
                                    <td className="py-3 px-4 border-b">{item.category}</td>
                                    <td className="py-3 px-4 border-b">{supplier ? supplier.name : 'Unknown'}</td>
                                    <td className={`py-3 px-4 border-b ${stockLevel}`}>
                                        {item.quantity > 500 ? 'Sufficient' : 'Low'}
                                    </td>
                                    <td className="py-3 px-4 border-b">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-150"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryList;
