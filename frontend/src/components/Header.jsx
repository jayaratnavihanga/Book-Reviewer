import React from 'react';

const Header = ({ onAddBook }) => (
    <header className="bg-gray-800 text-white p-4 mb-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">📚 Book Review App</h1>
            <button
                onClick={onAddBook}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                + Add Book
            </button>
        </div>
    </header>
);

export default Header;
