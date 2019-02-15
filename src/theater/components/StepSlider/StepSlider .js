import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
class StepSlider extends Component {

  handleChange = (event) => {
      this.props.onSliderChange(event);
  };
  render() {
    return (
    <div className="StepSlider">
        <Slider 
        min={this.props.min}
        max={this.props.max}
        step={1}
        onChange={this.handleChange}
        />
    </div>
    );
  }
}

export {
  StepSlider,
}