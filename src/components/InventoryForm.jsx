import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItemForm = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [supplierId, setSupplierId] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    const navigate = useNavigate();

    useEffect(() => {
        const editItemData = JSON.parse(localStorage.getItem('editItem'));
        if (editItemData) {
            const { item, index } = editItemData;
            setName(item.name);
            setQuantity(item.quantity);
            setCategory(item.category);
            setSupplierId(item.supplierId);
            setEditIndex(index);
            localStorage.removeItem('editItem');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, quantity: parseInt(quantity), category, supplierId };
        const items = JSON.parse(localStorage.getItem('items')) || [];

        if (editIndex !== null) {
            items[editIndex] = newItem;
        } else {
            items.push(newItem);
        }

        localStorage.setItem('items', JSON.stringify(items));
        navigate('/');
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                {editIndex !== null ? 'Edit Inventory Item' : 'Add Inventory Item'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Item Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Supplier</label>
                    <select
                        value={supplierId}
                        onChange={(e) => setSupplierId(e.target.value)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Supplier</option>
                        {suppliers.map((supplier) => (
                            <option key={supplier.id} value={supplier.id}>
                                {supplier.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-between items-center">
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-150">
                        {editIndex !== null ? 'Update Item' : 'Add Item'}
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 transition duration-150"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InventoryItemForm;
