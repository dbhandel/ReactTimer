const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      };
    }
  },
  componentWillUnmount() {
    clearInterval(this.timer);
  },
  handleStart() {
    let {count} = this.state
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  },
  handleStatusChange(newTimerStatus) {
    console.log(newTimerStatus);
    this.setState({
      timerStatus: newTimerStatus
    });
  },
  render() {
    let {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className='page-title'>Timer component</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer
