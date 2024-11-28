# 📚 Book Reviewer Application

The **Book Reviewer** application is a full-stack web app for managing and sharing book reviews. Users can add, edit, delete, and rate books, with the app calculating average ratings dynamically. It's designed with a clean UI and intuitive features for book enthusiasts.

---

##  Features

- **Book Management**:
  - Add new books with details like title, author, rating, and review text.
  - Edit existing book details.
  - Delete books.

- **Ratings**:
  - Rate books on a scale of 1 to 5.
  - View dynamically calculated average ratings for each book.

- **UI**:
  - Responsive design built with **TailwindCSS**.

- **Backend**:
  - RESTful API using **Node.js** and **Express**.
  - MongoDB for data persistence.
  - Seed script to populate the database with sample books.

---

## 🛠️ Setup Instructions

### Prerequisites
1. **Node.js**: Install the latest version from [nodejs.org](https://nodejs.org).


---

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-reviewer.git
cd book-reviewer
```
### 2. Backend Setup
```bash
cd backend
npm install
node seed.js
nodemon server.js
```
3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
