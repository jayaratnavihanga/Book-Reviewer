const API_URL = 'http://localhost:5000/reviews';

export const getReviews = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const getReviewById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export const createReview = async (review) => {
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });
};

export const updateReview = async (id, review) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });
};

export const deleteReview = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};


export const rateBook = async (id, rating) => {
    await fetch(`${API_URL}/${id}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating }),
    });
};
