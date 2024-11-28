import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm.jsx';
import { getReviewById, updateReview } from '../services/reviewService.jsx';

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetchReview();
    }, []);

    const fetchReview = async () => {
        const data = await getReviewById(id);
        setReview(data);
    };

    const handleUpdateReview = async (updatedReview) => {
        await updateReview(id, updatedReview);
        navigate('/');
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl text-red-950 font-bold mb-4">Edit Review</h2>
            {review ? (
                <ReviewForm onSubmit={handleUpdateReview} initialData={review} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditPage;
