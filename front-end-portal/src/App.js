import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

import UserApp from './components/UserApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserApp />
      </div>
    );
  }
}
export default App;
