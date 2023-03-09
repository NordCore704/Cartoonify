import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const shared = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}
export default shared