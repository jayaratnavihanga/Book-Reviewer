import React, { useEffect, useState } from 'react';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import { getReviews, createReview, deleteReview, rateBook } from '../services/reviewService';

const HomePage = ({ showForm, setShowForm }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const data = await getReviews();
        setReviews(data);
    };

    const handleAddReview = async (review) => {
        await createReview(review);
        fetchReviews();
        setShowForm(false);
    };

    const handleDeleteReview = async (id) => {
        await deleteReview(id);
        fetchReviews();
    };

    const handleRateBook = async (id, rating) => {
        await rateBook(id, rating);
        fetchReviews();
    };

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div className="bg-gray-100 p-4 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Book Reviews</h2>
                <ReviewList reviews={reviews} onDelete={handleDeleteReview} onRate={handleRateBook} />
            </div>

            {showForm && (
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
                    <ReviewForm onSubmit={handleAddReview} />
                </div>
            )}
        </div>
    );
};

export default HomePage;
