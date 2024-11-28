const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('./models/reviewModel');

dotenv.config();

const seedReviews = async () => {
    const reviews = [
        {
            bookTitle: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            rating: 5,
            reviewText: 'A timeless classic exploring themes of wealth and love.',
        },
        {
            bookTitle: '1984',
            author: 'George Orwell',
            rating: 4,
            reviewText: 'A thought-provoking dystopian novel about surveillance and control.',
        },
        {
            bookTitle: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            rating: 5,
            reviewText: 'An essential read addressing race, justice, and morality.',
        },
        {
            bookTitle: 'Pride and Prejudice',
            author: 'Jane Austen',
            rating: 5,
            reviewText: 'A romantic classic that delves into issues of class, marriage, and character.',
        },
        {
            bookTitle: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            rating: 4,
            reviewText: 'A coming-of-age story that resonates with adolescents and adults alike.',
        },
        {
            bookTitle: 'Moby-Dick',
            author: 'Herman Melville',
            rating: 3,
            reviewText: 'An epic tale of obsession and revenge set on the high seas.',
        },
        {
            bookTitle: 'Brave New World',
            author: 'Aldous Huxley',
            rating: 4,
            reviewText: 'A provocative novel envisioning a dystopian society driven by consumerism.',
        },
        {
            bookTitle: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            rating: 5,
            reviewText: 'A thrilling prelude to The Lord of the Rings, filled with adventure and wonder.',
        },
        {
            bookTitle: 'War and Peace',
            author: 'Leo Tolstoy',
            rating: 4,
            reviewText: 'A monumental work exploring human life during the Napoleonic Wars.',
        },
        {
            bookTitle: 'The Alchemist',
            author: 'Paulo Coelho',
            rating: 5,
            reviewText: 'A philosophical tale about following one\'s dreams and destiny.',
        },
    ];

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        await Review.deleteMany();
        console.log('Cleared existing reviews');

        await Review.insertMany(reviews);
        console.log('Seed data inserted successfully');

        mongoose.disconnect();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error seeding the database:', error);
        process.exit(1);
    }
};

seedReviews();
