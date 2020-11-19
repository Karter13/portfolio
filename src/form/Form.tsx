import React from 'react';
import styleContainer from '../common/styles/Common.module.css';
import style from './Form.module.scss';
import {Title} from '../common/components/titile/Title';
import {FeedbackForm} from './FormikForm';

type FormPropsType = {}
export const Form: React.FC<FormPropsType> = (props) => {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <Title title={'Get in Touch'}/>
                {/*/!*<form className={style.formBody}>*!/*/}
                {/*/!*    <input type="text" placeholder='name'/>*!/*/}
                {/*/!*    <input type="email" placeholder='email'/>*!/*/}
                {/*/!*    <textarea placeholder='text'/>*!/*/}
                {/*/!*    <button type={'submit'} className={style.button}>SEND MESSAGE</button>*!/*/}
                {/*/!*</form>*!/*/}
                <FeedbackForm/>
            </div>
        </div>
    )
};
