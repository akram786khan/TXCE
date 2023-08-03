import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amuse from '../screens/Amuse'
import Aviator from '../screens/Aviator'
import Lucky from '../screens/Lucky'
import Mine from '../screens/Mine'
import Win from '../screens/Win'

const Routing = () => {
    return (

                <Routes>
                    <Route exact path="/" element={<Amuse/>} />
                    <Route exact path="/Aviator" element={<Aviator/>} />
                    <Route exact path="/Lucky" element={<Lucky/>} />
                    <Route exact path="/Mine" element={<Mine />} />
                    <Route exact path="/Win" element={<Win />} />
                </Routes>
    )
}

export default Routing