import React, { Component } from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    )
  }
};

export default App;
