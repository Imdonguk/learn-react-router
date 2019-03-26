import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/우기부기">About 우기부기</Link></li>
            </ul>
            <hr />
        </div>
    );
};

export default Menu;