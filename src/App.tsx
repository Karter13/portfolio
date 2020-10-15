import React from 'react';
import './App.module.scss';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Form} from './form/Form';
import {Footer} from './footer/Footer';
import {Route, Switch} from 'react-router-dom';
import style from './App.module.scss'

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Switch>
                <Route exact path={'/'} render={() => <Main/>}/>
                <Route path={'/skills'} render={() => <Skills/>}/>
                <Route path={'/projects'} render={() => <Projects/>}/>
                <Route path={'/contact'} render={() => <Form/>}/>
            </Switch>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
