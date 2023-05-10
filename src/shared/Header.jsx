import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Header = () => {
    return (
        <header className='header__container'>
            <h1 className='header__title'><Link to="/">e-commerce</Link></h1>
            <nav>
                <ul className='header__links'>
                    <li><Link to="/"><i class='bx bxs-home' ></i>Home</Link></li>
                    <li><Link to="/login"><i class='bx bxs-user' ></i>Login</Link></li>
                    <li><Link to="/register"><i class='bx bxs-user-plus' ></i>Register</Link></li>
                    <li><Link to="/purchases"><i class='bx bxs-purchase-tag-alt' ></i>Purchases</Link></li>
                    <li><Link to="/cart"><i class='bx bxs-cart' ></i>Cart</Link></li>
                </ul>
            </nav>
            {/* <Breadcrumb>
                <Breadcrumb.Item ><Link to="/login">Login</Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to="/register">Register</Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to="/">Purchases</Link></Breadcrumb.Item>
                <Breadcrumb.Item active><Link to="/">Cart</Link></Breadcrumb.Item>
                list-style: none;
            </Breadcrumb> */}
        </header>
    )
}

export default Header