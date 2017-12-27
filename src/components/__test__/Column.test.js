import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Column from '../Column';

describe('Column', () => {
  it('Column renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Column properties={[]} />, div);
  });

  it('should render correctly with given props', () => {
    const properties = [(<div key="1">test</div>)];
    
    const output = shallow(
      <Column properties={properties} />
    );

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
