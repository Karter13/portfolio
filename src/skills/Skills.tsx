import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Common.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/titile/Title';
import jsIcon from '../assets/icons/js.jpg';
import tsIcon from '../assets/icons/typescript.svg';

export const Skills = () => {
    const jS = {
        backgroundImage: `url('${jsIcon}')`,
    };
    const tS = {
        backgroundImage: `url('${tsIcon}')`,
    };
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={jS} title={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt '}/>
                    <Skill style={tS} title={'TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt '}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt '}/>
                    <Skill title={'Git'} description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill title={'Rest API'} description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill title={'HTML'} description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill title={'SaSS'} description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                </div>
            </div>
        </div>
    )
};
