import React from 'react';
import {TodoList, Filter} from './containers';

const App = () => {
    return (<div>
      <TodoList />
      <div>
        Filter by state: <br/>
        <Filter filter="SHOW_ALL">
          All
        </Filter>
        {", "}
        <Filter filter="SHOW_ACTIVE">
          Active
        </Filter>
        {", "}
        <Filter filter="SHOW_COMPLETED">
          Completed
        </Filter>
      </div>
    </div>);
}

export default App;