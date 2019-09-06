const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: 'Hello, webpack',
  };

  render() {
    return (
      <React.Fragment>
        {this.state.text}
      </React.Fragment>
    )
  }
}

module.exports = WordRelay;