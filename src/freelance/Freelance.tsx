import React from 'react';
import style from './Freelance.module.css';
import styleContainer from '../common/styles/Common.module.css';

type FreelancePropsType = {}
export const Freelance: React.FC<FreelancePropsType> = (props) => {
    return (
        <div className={style.freelanceBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2 className={style.title}>I Am Available For Freelancer</h2>
                <button className={style.button}>HIRE ME</button>
            </div>
        </div>
    )
};
