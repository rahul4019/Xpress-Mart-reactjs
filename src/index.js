import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Toaster } from 'react-hot-toast';

import rootReducer from './services/Reducers/index';
import './styles/index.css';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('Before STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
