import React from 'react';
import ReactDOM from 'react-dom';
import {I18nJs, I18nProvider} from 'i18n-xml-js/lib/react-plugin.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import zh from './i18n/zh.js'
import en from './i18n/en.js'

const i18 = new I18nJs({en, zh}, 'en');


ReactDOM.render(<I18nProvider lang={i18} defaultLocal={'zh'}><App/></I18nProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
