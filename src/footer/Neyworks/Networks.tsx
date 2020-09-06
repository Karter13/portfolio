import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './Networks.module.css'

type NetworksPropsType = {}

export const Networks: React.FC<NetworksPropsType> = (props) => {
    return (
        <div className={style.networks}>
            <div>
                <NavLink to={'/Facebook'}></NavLink>
            </div>
            <div>
                <NavLink to={'/Twitter'}></NavLink>
            </div>
            <div>
                <NavLink to={'/Dribble'}></NavLink>
            </div>
            <div>
                <NavLink to={'/Linkedin'}></NavLink>
            </div>
            <div>
                <NavLink to={'/Telegram'}></NavLink>
            </div>

        </div>
    )
};
