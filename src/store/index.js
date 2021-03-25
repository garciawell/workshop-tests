import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './combineReducers';
import sagas from './combineSagas';


const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);


const store = createStore(
    reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export { store };