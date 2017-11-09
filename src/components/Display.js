import React, { Component } from 'react';
import request from 'request';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from './Dialog';



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
        // console.log(this.state.display[0]);
        console.log(this.state.display);
        console.log(JSON.parse(body));

      });
  }


  render() {
    const style = {
    margin: 12
  };
    return (
      <div>
        <ul>
        {this.state.display.map((item, e) => {
          return (
            <li key={e} className='myList'>
            <RaisedButton
            label={item.address}
            onClick={this.props.isOpen}
            />
            <Dialog title="Velib station" modal={false}
                    open={this.props.openDialog}
                    onRequestClose={this.props.isClosed}
                    >

                    <RaisedButton  label="Cancel" onClick={this.props.isClosed} style={style}/>
                    <RaisedButton label="Submit" type="submit" primary={true} style={style}/>

                  </Dialog>
        </li>)
        })}
      </ul>

      </div>
    );
  }

}

export default Display;
