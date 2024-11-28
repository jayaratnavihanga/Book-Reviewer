import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import EditPage from './pages/EditPage.jsx';
import Header from './components/Header.jsx';

const App = () => {
    const [showForm, setShowForm] = useState(false); // Toggle form visibility

    return (
        <Router>
            <div className="container mx-auto p-4">
                <Header onAddBook={() => setShowForm(!showForm)} />
                <Routes>
                    <Route path="/" element={<HomePage showForm={showForm} setShowForm={setShowForm} />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
