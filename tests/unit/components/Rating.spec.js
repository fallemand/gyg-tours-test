import React from 'react';
import Rating from '../../../app/components/Rating';

describe('Rating', () => {
  const props = {
    value: 3.2,
    className: '__CLASSNAME__',
  };

  it('render component', () => {
    const component = shallow(<Rating {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('should have 5 stars', () => {
    const component = shallow(<Rating {...props} />);
    const stars = component.find('.rating__star');
    expect(stars).toHaveLength(5);
  });

  it('count filled stars', () => {
    const component = shallow(<Rating {...props} />);
    let stars = component.find('.rating__star--filled');
    expect(stars).toHaveLength(3);
    component.setProps({
      value: 4.5,
    });
    stars = component.find('.rating__star--filled');
    expect(stars).toHaveLength(4);
  });
});
