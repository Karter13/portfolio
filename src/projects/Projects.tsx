import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Common.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/titile/Title';
import socialImage from '../assets/image/network-social.jpg'
import todoImage from '../assets/image/todolist.jpg'

export const Projects = () => {

    const todoList = {
        backgroundImage: `url('${todoImage}')`,
    };
    const social = {
        backgroundImage: `url('${socialImage}')`,
    };

    return(
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title title={'Project'}/>
                <div className={style.projects}>
                    <Project style={social} name={'Social network'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae eligendi eos in ipsum numquam quaerat quidem sequi velit!'}/>
                    <Project style={todoList} name={'TodoList'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae eligendi eos in ipsum numquam quaerat quidem sequi velit!'}/>
                    <Project style={social} name={'Blog'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae eligendi eos in ipsum numquam quaerat quidem sequi velit!'}/>
                </div>
            </div>
        </div>
    )
};

