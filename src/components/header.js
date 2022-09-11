import React from "react";

export default function Header() {
    return (
        <nav>
            <div className="logo">Nike</div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                <i className="icon-search fa-sharp fa-solid fa-magnifying-glass"></i>
                <i className="icon-cart fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
    )
}

