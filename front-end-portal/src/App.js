import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

import UserApp from './component/UserApp';

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
