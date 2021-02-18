import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  handleIncreament = e => {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave Feedback</h2>
      </div>
    );
  }
}

export default Feedback;
