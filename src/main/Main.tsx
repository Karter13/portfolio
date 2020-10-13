import React, {CSSProperties} from 'react';
import styleContainer from '../common/styles/Common.module.css'
import style from './Main.module.scss'
import authorPhoto from '../assets/image/authorphoto.jpg'

export const Main = () => {

    const author = {
        backgroundImage: `url('${authorPhoto}')`,
    };

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <h1>Mikhail Karamzin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo} style={author}>
                </div>
            </div>
        </div>
    )
};
