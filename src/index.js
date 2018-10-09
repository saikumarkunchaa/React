import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LifeCycle from './lifecycle';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { ReactReduxComponent } from './reduxComponent';
import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
<Provider store={configureStore()}>
<ReactReduxComponent />
</Provider>, document.getElementById('root'));
registerServiceWorker();




