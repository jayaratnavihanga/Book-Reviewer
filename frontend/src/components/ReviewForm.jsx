import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        bookTitle: '',
        author: '',
        rating: '',
        reviewText: '',
        ...initialData,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="bookTitle"
                placeholder="Book Title"
                value={formData.bookTitle}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded"
            />
            <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded"
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={formData.rating}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded"
            />
            <textarea
                name="reviewText"
                placeholder="Review Text"
                value={formData.reviewText}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default ReviewForm;
