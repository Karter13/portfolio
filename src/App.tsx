import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Freelance} from './freelance/Freelance';
import {Form} from './form/Form';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Freelance/>
        <Form/>
    </div>
  );
}

export default App;
