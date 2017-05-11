import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About MST3K Episode Guide</h1>
        <p>Episode data provided by <a href="https://github.com/edplato/mst3k-episodes" target="_blank">MST3K JSON</a></p>
      	<p>MST3K Episode Guide github found <a href="https://github.com/edplato/mst3kspa" target="_blank">here</a></p>
      	<p>Contact <a href="mailto:edplatomail@gmail.com">me</a> with any questions</p>
      </div>
    );
  }
}

export default About;