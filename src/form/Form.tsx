import React from 'react';
import style from './Form.module.css';
import styleContainer from '../common/styles/Common.module.css';

type FormPropsType = {}
export const Form: React.FC<FormPropsType> = (props) => {
    return (
        <div className={style.formBlock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.formBody}>
                    <div className={style.name}>
                        <input type="text" placeholder='name'/>
                    </div>

                    <div className={style.email}>
                        <input type="email" placeholder='email'/>
                    </div>
                    <div className={style.text}>
                        <textarea placeholder='text'/>
                    </div>
                </form>
                <button className={style.button}>SEND MESSAGE</button>
            </div>
        </div>
    )
};
