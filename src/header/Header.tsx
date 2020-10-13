import React from 'react';
import styleContainer from '../common/styles/Common.module.css';
import style from './Header.module.scss';
import {Nav} from '../nav/Nav';


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${style.headerContainer} ${styleContainer.container}`}>
                <Nav/>
            </div>
        </div>
    )
};
