import React from 'react';// ...existing code...



















export default App;}    );        </BrowserRouter>            </Routes>                <Route path="/articles" element={<ArticlePage />} />                <Route path="/about" element={<AboutPage />} />                <Route path="/" element={<HomePage />} />            <Routes>        <BrowserRouter>    return (function App() {import ArticlePage from './pages/ArticlePage';import AboutPage from './pages/AboutPage';import HomePage from './pages/HomePage';import { BrowserRouter, Routes, Route } from 'react-router-dom';import ArticlePage from './pages/ArticlePage';
// ...existing code...

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ...existing routes... */}
                <Route path="/articles" element={<ArticlePage />} />
                {/* ...existing routes... */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
