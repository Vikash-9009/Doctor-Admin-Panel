import React from 'react';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
