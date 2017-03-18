const React = require('react');
const Clock = require('Clock');

const Timer = React.createClass({
  render() {
    return (
      <div>
        <h3>Timer component</h3>
        <Clock totalSeconds={615}/>
      </div>
    );
  }
});

module.exports = Timer
