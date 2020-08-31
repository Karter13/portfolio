import React from 'react';
import style from './Nav.module.css';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to={'/main'} >Главная</NavLink>
            <NavLink to={'/skills'} >Скилы</NavLink>
            <NavLink to={'/projects'} >Проекты</NavLink>
            <NavLink to={'/contacts'} >Контакты</NavLink>
        </div>
    )
};
