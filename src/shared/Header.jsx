import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Header = () => {
    return (
        <header>
            <h1><Link to="/">e-commerce</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/purchases">Purchases</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
            {/* <Breadcrumb>
                <Breadcrumb.Item ><Link to="/login">Login</Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to="/register">Register</Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to="/">Purchases</Link></Breadcrumb.Item>
                <Breadcrumb.Item active><Link to="/">Cart</Link></Breadcrumb.Item>
            </Breadcrumb> */}
        </header>
    )
}

export default Header