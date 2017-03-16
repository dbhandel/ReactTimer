var React = require('react');
const Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation />
          <h3>Main Component</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
