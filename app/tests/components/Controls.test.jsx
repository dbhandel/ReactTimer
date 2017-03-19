const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('Render', () => {
    it('should render a paused button when countdown status is started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render a start button when countdown status is paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });

})
