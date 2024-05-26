import React from 'react';
import "../HomePage/HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <nav>
                <div className="nav__logo">
                    BadmintonHub <i className="fa-sharp fa-regular fa-badminton"></i>
                </div>
                <ul className="nav__links">
                    <li className="link"><NavLink to="/">Home</NavLink></li>
                    <li className="link"><NavLink to="/search">Book</NavLink></li>
                    <li className="link"><NavLink to="/booked">Your Booked</NavLink></li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" role="button">Account</span>
                        <ul className="dropdown-menu">
                            <li className="link"><NavLink to="/login">LogIn</NavLink></li>
                            <li className="link"><NavLink to="/">LogOut</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
