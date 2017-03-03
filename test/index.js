import 'babel-polyfill';
import Widget from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Widget', () => {

  it('renders a React element', () => {
    React.isValidElement(<Widget />).should.equal(true);
  });

  describe('Rendering - iframe', () => {
    let rendered = null;
    let widget = null;
    beforeEach(() => {
      rendered = mount(<Widget />);
      widget = rendered.find('.widget-iframe');
    });

    it('renders a top level div.widget-iframe', () => {
      widget.should.have.tagName('iframe');
      widget.should.have.className('widget-iframe');
    });
  });

});
