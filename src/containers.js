import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

const getVisibleTodos = (todos, filter) => {
  console.log(todos);
  console.log('filter = '+filter);
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => {
      	console.log('- [SHOW_COMPLETED ]complete = '+t.complete);
      	console.log(t);
        return t.get('complete');
      })
    case 'SHOW_ACTIVE':
      return todos.filter(t => {
      	console.log('- [SHOW_ACTIVE ]complete = '+t.complete);
      	console.log(t);
      	return !t.get('complete');
      })
  }
}

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
	//return { todos: state.todos };
  },
  function mapDispatchToProps(dispatch) {
    return {
    	addTodo: text => {

    		return dispatch(addTodo(text))
    	},
    	toggleTodo: id => dispatch(toggleTodo(id))
  	};
  }
)(components.TodoList);

export const Filter = connect(
  function mapStateToProps(state, props) {
    return {
      active: props.filter === state.visibilityFilter
    };
  },
  function mapDispatchToProps(dispatch, props) {
    return {
    	onClick: filter => {
     		return dispatch(setVisibilityFilter(props.filter));
    	}
  	};
  }
)(components.Filter);