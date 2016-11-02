import React from 'react';

export function Filter({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  );
}

export function Todo(props) {
  const { todo } = props;
  if(todo.complete) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = (event) => {
  	console.log('submit');
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    console.log('text = '+text);
    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  }

  const toggleClick = id => event => toggleTodo(id);

  return (
    <div className='todo'>
      <input type='text' placeholder='Add todo' onKeyDown={onSubmit}/>
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')} className='todo__item'
              onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}