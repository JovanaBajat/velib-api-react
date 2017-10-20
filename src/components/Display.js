import React, { Component } from 'react';
import request from 'request';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display : []
    }
  }

  componentWillReceiveProps(nextProps){
    request(`https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=562000a05debc0e4a613dd277f1ac7585460292b`,
      (err, res, body) => {
        if(err) console.log(err)

        let resultat = JSON.parse(body).filter((station) => {
          let regex = new RegExp(this.props.name, 'ig');
          return station.address.match(regex)
        })
    // console.log(resultat);

        this.setState({
          display : resultat
        });
        console.log(this.state.display[0]);
        console.log(this.state.display);

      });
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.display.map((item, e) => {
          return (<li key={e}>{item.address}</li>)
        })}
      </ul>

      </div>
    );
  }

}

export default Display;
