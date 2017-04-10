import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, hashHistory } from 'react-router';

import routes from './routes';
import rootReducer from './src/reducers';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>, document.getElementById('app')
);
