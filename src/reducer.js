import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

const init = List([]);

const todos = (todos=init, action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
    	if(t.get('id') === action.payload) {
      		//return t.update('isDone', isDone => !isDone);
      		return t.update('complete', complete => !complete);
    	} else {
    	  	return t;
    	}
  	  });
    default:
      return todos;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const red = combineReducers({ todos, visibilityFilter });
export default red;

/*export default todos;*/