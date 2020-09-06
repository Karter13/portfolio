import React from 'react';
import style from './Footer.module.css'
import {Networks} from './Neyworks/Networks';
import styleContainer from '../common/styles/Common.module.css';

type FooterPropsType = {}

export const Footer: React.FC<FooterPropsType> = (props) => {
    return (
        <div className={style.networksBlock}>
            <div className={`${styleContainer.container} ${style.networksContainer}`}>
                <h2>Maikl</h2>
                <Networks/>
                <span>2020</span>
            </div>
        </div>
    )
}
