import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router-dom';
import history from "./History";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './Utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './Actions';
import rootReducer from './Reducers';


const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  
  if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }

ReactDOM.render(<Router history={history}><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
registerServiceWorker();
