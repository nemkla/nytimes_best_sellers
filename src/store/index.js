import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

//import createSagaMiddleware from 'redux-saga';
//import rootSaga from '../sagas';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const logger = createLogger();
  const router = routerMiddleware(history);
  //const saga = createSagaMiddleware();
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(logger, router)
    )
  )
  //saga.run(rootSaga);

  return store
}
