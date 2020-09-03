import style from './Project.module.css';
import React from 'react';

type ProjectPropsType = {
    name:string
    text: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.images}>
                <img src="" alt=""/>
            </div>
            <h3>{props.name}</h3>
            <span>{props.text}</span>
        </div>
    )
};
