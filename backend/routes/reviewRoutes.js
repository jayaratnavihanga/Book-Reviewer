const express = require('express');
const { getReviews, createReview, updateReview, deleteReview, getReviewById, addRating} = require('../controllers/reviewController');
const router = express.Router();

router.get('/', getReviews);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);
router.get('/:id', getReviewById);
router.post('/:id/rate', addRating);




module.exports = router;
