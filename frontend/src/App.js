import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import LogTable from './components/LogTable'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <LogTable />
      </div>
    );
  }
}

export default App;
