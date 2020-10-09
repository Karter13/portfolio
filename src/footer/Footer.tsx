import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Common.module.css';

type FooterPropsType = {}

export const Footer: React.FC<FooterPropsType> = (props) => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Maikl</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>2020</span>
            </div>
        </div>
    )
}
