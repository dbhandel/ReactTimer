const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid digits were entered into the form', () => {
    const spy = expect.createSpy();
    let countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    let $el = $(ReactDOM.findDOMNode(countDownForm));

    countDownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds were entered into the form', () => {
    const spy = expect.createSpy();
    let countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    let $el = $(ReactDOM.findDOMNode(countDownForm));

    countDownForm.refs.seconds.value = '109a';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
})
