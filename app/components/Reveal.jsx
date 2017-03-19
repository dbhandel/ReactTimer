const React = require('react');

const Reveal = React.createClass({
  render() {
    return (
      <div className='reveal small' data-reveal>
        <h2 className="warning-text">You are only permitted to enter digits.</h2>
        <button className='close-button' data-close>Got it!</button>
      </div>
    );
  }
});



module.exports = Reveal
