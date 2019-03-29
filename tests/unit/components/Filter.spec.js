import React from 'react';
import Filter from '../../../app/components/Filter';

describe('Filter', () => {
  const props = {
    onFilter: jest.fn(),
    onChange: () => {},
    field: '__VAL1__',
    fields: [
      { value: '__VAL1__', label: '__LAB1__' },
      { value: '__VAL2__', label: '__LAB2__', selected: true },
      { value: '__VAL1__', label: '__LAB1__', disabled: true },
    ],
  };

  it('render component', () => {
    const component = shallow(<Filter {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render with className', () => {
    const component = shallow(<Filter className="__CLASSNAME__" {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('handleSubmit call onChange', () => {
    // todo 3
    const component = shallow(<Filter {...props} />);
    const instance = component.instance();
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(props.onFilter).toHaveBeenCalled();
  });
});
