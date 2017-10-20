import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput';
import Display from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName : ''
    }
  }

  inputCityName = (name) => {
    this.setState({
      cityName : name
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <SearchInput input={this.inputCityName}/>
      <Display name={this.state.cityName}/>
      </div>
    );
  }
}

export default App;
