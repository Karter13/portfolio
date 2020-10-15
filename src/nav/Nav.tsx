import React from 'react';
import style from './Nav.module.scss';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to={'/'} >Main</NavLink>
            <NavLink to={'/skills'} >Skills</NavLink>
            <NavLink to={'/projects'} >Projects</NavLink>
            <NavLink to={'/contact'} >Contact</NavLink>
        </div>
    )
};
