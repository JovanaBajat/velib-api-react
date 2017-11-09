import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Display from './components/Display';
// import Dialog from './components/Dialog';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName : '',
      openDialog : false
    }
  }

  inputCityName = (name) => {
    this.setState({
      cityName : name
    });
  }

  handleOpen = () => {
    this.setState({openDialog: true});
  };

  handleClose = () => {
    this.setState({openDialog: false});
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>Find a velib in Paris!</h1>
          <SearchInput input={this.inputCityName}/>
          <Display name={this.state.cityName} openDialog={this.state.openDialog} isOpen={this.handleOpen} isClosed={this.handleClose}/>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
