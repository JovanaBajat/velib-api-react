import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    // json.parse(body).filter((station) => {
    // (/e.target.value) (object constructor regex)}
    // map sur le resultat map((e) => {})
  
    this.setState({
      inputValue : e.target.value
    });
  }

  updateValue = (e) => {
    e.preventDefault();
    this.props.input(this.state.inputValue);
    this.setState({
      inputValue : ''
    })
  }


  render() {
    return (
      <form>
        <input type="text" required
        onChange={this.handleInputChange}
        value={this.state.inputValue}/>
        <button onClick={this.updateValue}>Find a velo</button>


      </form>
    );
  }

}

export default SearchInput;
