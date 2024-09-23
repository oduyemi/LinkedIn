import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";
import { Navbar } from "../components/Navbar";



export const Navigation = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="*" element={<Error404 />} /> */}
            </Routes>
        </BrowserRouter>
    )
}