import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/create" component={TaskForm} />
          <Route path="/" component={TaskList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;