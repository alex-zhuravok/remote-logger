import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import LogTable from './components/LogTable'

class App extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <LogTable />
          </div>
          <div className="col-1"></div>
        </div>
    );
  }
}

export default App;
