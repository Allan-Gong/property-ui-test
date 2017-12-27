import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Property from '../Property';

const TEST_PROPERTY_DATA = {
  "price": "$726,500",
  "agency": {
    "brandingColors": {
      "primary": "#ffe512"
    },
    "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
  },
  "id": "1",
  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
};

describe('Property', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Property property={TEST_PROPERTY_DATA} buttonText="text" buttonAction={() => {}} />
    );

    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should invoke given buttonAction from props as expected', () => {
    const buttonAction = sinon.spy();

    const output = shallow(
      <Property property={TEST_PROPERTY_DATA} buttonText="text" buttonAction={buttonAction} />
    );
    // expect(wrapper.find(Link).length).toBe(5);
    output.find('.button-action').simulate('click');
    expect(buttonAction.calledOnce);//.to.have.property('callCount', 1);
  });
});

