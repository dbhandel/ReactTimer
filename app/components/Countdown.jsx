const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState() {
    return {
      seconds: 0,
      coundownStatus: 'stopped'
    }
  },
  propTypes: {
    seconds: React.PropTypes.number,
    countdownStatus: React.PropTypes.string
  },
  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':

        break;
        case 'paused':

        break;
        default:

      }
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      if(this.state.seconds > 0) {
        let newSeconds = this.state.seconds - 1;
        this.setState({
          seconds: newSeconds
        });
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000)
  },
  handleSetCountdown(seconds){
    this.setState({
      seconds,
      countdownStatus: 'started'
    })
  },
  render() {
    return (
      <div>
        <Clock totalSeconds={this.state.seconds} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown
