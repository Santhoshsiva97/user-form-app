import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DateComponent from './user/DateComponent';
import User from './user/User';

 
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" />
            <Routes>
              <Route index element={<User props={this.props} location={window.location} history={window.history} />} />
                <Route path="/date" element={<DateComponent props={this.props} location={window.location} history={window.history} />} />
                {/* {(props) => <DateComponent {...props} />} 
              </Route> */}
            </Routes>
        </header>
      </div>
    );
  }
}

export default App;