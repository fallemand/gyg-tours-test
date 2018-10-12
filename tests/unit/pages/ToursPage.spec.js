import React from 'react';
import ToursPage from '../../../app/pages/tours/ToursPage';

jest.mock('../../../app/services/tours.service', () => ({ getTours: () => ({
  tours: [],
  total: 2,
}) }));

global.console = {
  log: jest.fn(),
};

describe('ToursPage', () => {
  const toursInfo = [{
    logoUri: '__LOGOURI__',
    title: '__TITLE__',
    rating: '__RATING__',
    price: '__PRICE__',
    currency: '__CURRENCY__',
    isSpecialOffer: true,
    className: '__CLASSNAME__',
  }];
  const props = {
    history: { push: jest.fn() },
    location: { search: '' },
  };

  it('render component', () => {
    const component = shallow(<ToursPage {...props} />);
    component.setState({
      tours: toursInfo,
    });
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('click on restaurant should redirect to restaurant page', () => {
    const component = shallow(<ToursPage {...props} />);
    component.setState({
      tours: toursInfo,
    });
    component.find('.tours__list-tours :first-child').simulate('click');
    expect(global.console.log).toHaveBeenCalledWith(`Clicked: ${toursInfo[0].title}`);
  });
});
