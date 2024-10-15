import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <Link className="text-lg font-bold" to="/">Inventory Dashboard</Link>
            <div className="space-x-4">
                <Link
                    to="/add-inventory"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
                >
                    Add Inventory Item
                </Link>
                <Link
                    to="/add-supplier"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
                >
                    Add Supplier
                </Link>
            </div>
        </div>
    );
};

export default Header;
