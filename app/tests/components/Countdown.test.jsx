const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10)

      expect(countdown.state.countdownStatus).toBe('started');
      expect(countdown.state.seconds).toBeLessThanOrEqualTo(10);

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(9);
        done();
      }, 1001)
    });

    it('should not count down less than 0', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1)

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0);
        done();
      }, 2200)
    });
  })
})
