const React = require('react');
const Reveal = require('Reveal');

const CountdownForm = React.createClass({
  onSubmit(event) {
    event.preventDefault();
    let strSeconds = this.refs.seconds .value;

    if(strSeconds.match(/^[0-9]*$/)) {
    this.refs.seconds .value = '';
    this.props.onSetCountdown(parseInt(strSeconds, 10));

    }
    // still sorting out how to handle a popup
    // else {
    //   return <reveal/>;
    // }
  },

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit} className='countdown-form' ref='form'>
        <input type='text' ref='seconds' placeholder='enter time in seconds'/>
      <button className='button expanded' >Start</button>
      </form>
    </div>
    );
  }
});

module.exports = CountdownForm
