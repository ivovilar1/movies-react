import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
            </Routes>
        </Router>
    );
};

export default App;