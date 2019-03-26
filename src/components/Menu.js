import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const woogieboogie = {
        color: 'green',
        fontSize: '2rem'
    };


    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={woogieboogie}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={woogieboogie}>About</NavLink></li>
                <li><NavLink to="/about/우기부기" activeStyle={woogieboogie}>About 우기부기</NavLink></li>
            </ul>
            <hr />
        </div>
    );
};

export default Menu;