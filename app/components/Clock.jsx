const React = require('react');

const Clock = React.createClass({
  getDefaultProps() {
    totalSeconds: 0
  },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds(totalSeconds) {
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    if(totalSeconds === 0) {
      return '00:00'
    } else if(!totalSeconds || typeof totalSeconds !== 'number') {
      return null;
    }
    return (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  },

  render() {
    let {totalSeconds} = this.props;
    return (
      <div className='clock'>
        <span className='clock-text'>
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock
