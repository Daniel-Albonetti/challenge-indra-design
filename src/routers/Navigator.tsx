
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/ui/Navbar'

const Navigator = () => {

    return (
        <div className="container">
            <BrowserRouter>

                <Navbar />

                <Routes>

                    <Route path="/" element={ <Home /> } />
                    <Route path="/*" element={ <Navigate to={"/home"} replace /> } />

                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default Navigator