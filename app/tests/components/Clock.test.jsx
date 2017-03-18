const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');


describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

describe('render', () => {
  it('should render', () => {
    let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    //using jQuery and React's findDOMNode method to find the clock element rendered into the DOM and then get the text
    //first find the node and save as a jQuery object
    let $el = $(React.findDOMNode(clock));
    //then get the text
    let actualText = $el.find('.clock-text').text();

    expect(actualText).toBe('01:02');
  })
});

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 615;
      let expected = '10:15';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when mins/sec is less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format properly when mins is 0', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 45;
      let expected = '00:45';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format properly when the argument is 0', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 0;
      let expected = '00:00';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should return null if no argument is supplied', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);

      let expected = null;
      let actual = clock.formatSeconds();

      expect(actual).toBe(expected);
    });
  });
});
