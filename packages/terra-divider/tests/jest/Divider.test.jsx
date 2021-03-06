import React from 'react';
import Divider from '../../src/Divider';

describe('Divider', () => {
  const defaultRender = <Divider />;

  // Snapshot Tests
  it('should render a basic component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<Divider id="testDivider" />);
    expect(wrapper).toMatchSnapshot();
  });
});
