import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import List from './List';
import Register from './Register';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/list" component={List}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
