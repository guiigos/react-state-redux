import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

class ClassComponent extends Component {
  render() {
    const { value, decrease, increase } = this.props;

    return (
      <p>
        <FaPlusCircle onClick={increase} />
        <span>{value}</span>
        <FaMinusCircle onClick={decrease} />
      </p>
    );
  }
}

export default ClassComponent;
