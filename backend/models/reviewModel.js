const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    ratings: [{ type: Number, min: 1, max: 5 }],
    averageRating: { type: Number, default: 0 },
    reviewText: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
});

reviewSchema.pre('save', function (next) {
    if (this.ratings.length > 0) {
        this.averageRating =
            this.ratings.reduce((sum, rating) => sum + rating, 0) / this.ratings.length;
    } else {
        this.averageRating = 0;
    }
    next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
