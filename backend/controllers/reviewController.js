const Review = require('../models/reviewModel');

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ dateAdded: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
    }
};


const createReview = async (req, res) => {
    try {
        const { bookTitle, author, rating, reviewText } = req.body;
        const newReview = new Review({ bookTitle, author, rating, reviewText });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error: error.message });
    }
};



const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(204).send(); // No content response
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error: error.message });
    }
};


const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving review', error: error.message });
    }
};

const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookTitle, author, rating, reviewText } = req.body;
        const updatedReview = await Review.findByIdAndUpdate(
            id,
            { bookTitle, author, rating, reviewText },
            { new: true }
        );
        if (!updatedReview) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error: error.message });
    }
};

const addRating = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating } = req.body;

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ message: 'Book not found' });
        }

        review.ratings.push(rating);
        await review.save();

        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error adding rating', error: error.message });
    }
};





module.exports = { getReviews, createReview, updateReview, deleteReview,getReviewById,addRating};
