import style from './Project.module.css';
import React from 'react';

type ProjectPropsType = {
    name:string
    text: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a className={style.viewBtn}>Watch the project</a>
            </div>
            <h3 className={style.projectTitle}>{props.name}</h3>
            <p className={style.description}>{props.text}</p>
        </div>
    )
};
