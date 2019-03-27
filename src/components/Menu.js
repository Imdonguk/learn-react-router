import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {

    return (
        <div className="menu">
            <NavLink exact className="item" activeClassName="active" to='/'>HOME</NavLink>
            <NavLink className="item" activeClassName="active" to="/about">About</NavLink>
            <NavLink className="item" activeClassName="active" to="/posts">포스트</NavLink>
        </div>
    );
};

export default Menu;