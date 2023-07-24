import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;