import React, { useState } from 'react';

function AddCategory() {
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category }),
            });

            if (response.ok) {
                const data = await response.text();
                setMessage(data);
                setCategory(''); // Clear the input field
            } else {
                setMessage('Error creating category');
            }
        } catch (error) {
            console.error('Error creating category:', error);
            setMessage('Error creating category');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="ml-28 text-2xl mt-5 font-bold mb-4">Add New Category</h1>
            <form className='ml-28 mr-28' onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category Title
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Category
                </button>
            </form>
            {message && <p className="mt-4 ml-28 text-green-500">{message}</p>}
        </div>
    );
}

export default AddCategory;
