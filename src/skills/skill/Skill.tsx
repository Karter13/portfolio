import React from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    style?: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.iconBlock} >
                <img className={style.logo} src = {props.style} alt={props.title}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
};
