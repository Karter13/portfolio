import style from './Project.module.css';
import React, {CSSProperties} from 'react';

type ProjectPropsType = {
    name: string
    text: string
    style: CSSProperties
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.viewBtn}>Watch the project</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.name}</h3>
                <p className={style.description}>{props.text}</p>
            </div>
        </div>
    )
};
