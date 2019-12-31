import React, { Component } from 'react';
import Typical from 'react-typical';

class TypicalAnimation extends Component {
  render() {
    return (
      <Typical
        steps={['Hi,', 2000, 'Hi, my name is....', 3000]}
        loop={Infinity}
        wrapper="h5"
      />
    );
  }
}
export default TypicalAnimation;
