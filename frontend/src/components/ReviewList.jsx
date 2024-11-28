import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, onDelete, onRate }) => {
    const [ratingInput, setRatingInput] = React.useState({}); // Track ratings for each book

    const handleRate = (id) => {
        const rating = parseInt(ratingInput[id], 10);
        if (rating >= 1 && rating <= 5) {
            onRate(id, rating);
            setRatingInput({ ...ratingInput, [id]: '' }); // Clear input
        } else {
            alert('Please enter a rating between 1 and 5.');
        }
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');
        if (confirmDelete) {
            onDelete(id);
        }
    };

    return (
        <div className="space-y-4">
            {reviews.map((review) => (
                <div key={review._id} className="p-4 bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-bold">{review.bookTitle}</h3>
                    <p className="text-gray-600">Author: {review.author}</p>
                    <p className="text-yellow-500">⭐ Average Rating: {review.averageRating.toFixed(1)}</p>
                    <p className="text-gray-700">{review.reviewText}</p>
                    <small className="text-gray-500">Added on: {new Date(review.dateAdded).toLocaleDateString()}</small>

                    <div className="mt-4 flex items-center space-x-2">
                        <input
                            type="number"
                            placeholder="Rating"
                            value={ratingInput[review._id] || ''}
                            onChange={(e) => setRatingInput({ ...ratingInput, [review._id]: e.target.value })}
                            className="border p-2 rounded w-20"
                        />
                        <button
                            onClick={() => handleRate(review._id)}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Rate
                        </button>
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Link to={`/edit/${review._id}`} className="text-blue-500 hover:underline">
                            Edit
                        </Link>
                        <button
                            onClick={() => handleDelete(review._id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
