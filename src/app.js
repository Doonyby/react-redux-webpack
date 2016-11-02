import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './entrypoint';

/*import { List, Map } from 'immutable';

const dummyTodos = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);*/

import reducer from './reducer';
console.log(reducer);

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);