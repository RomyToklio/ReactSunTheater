import React, { Component } from 'react'
import './Picture.css';

class Picture extends Component {
  
  render() {
    let image = "";
    if(this.props.configuration.currentInstrument && this.props.configuration.currentResolution){
      const tmp = this.props.instruments[this.props.configuration.currentInstrument].images[this.props.configuration.currentResolution];
      if(tmp){
        image = (
          <img alt="" src={tmp[this.props.index].url} />
        );
      }
      
    }else {
      image = (
      <p>Loading....</p>
      );
    }
    
    return (
      <div  className="Picture">
        {image}
        <p>{this.props.step}</p>
      </div>
    )
  }
}

export {
    Picture,
}