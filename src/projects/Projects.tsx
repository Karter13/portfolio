import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Common.module.css'
import {Project} from './project/Project';

export const Projects = () => {
    return(
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project name={'Name of the project'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae eligendi eos in ipsum numquam quaerat quidem sequi velit!'}/>
                    <Project name={'Name of the project'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae eligendi eos in ipsum numquam quaerat quidem sequi velit!'}/>
                </div>
            </div>
        </div>
    )
};

