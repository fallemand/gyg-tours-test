import React from 'react';
import TourInfo from '../../../app/components/TourInfo';

describe('RestaurantInfo', () => {
  const props = {
    image: '__LOGOURI__',
    title: '__TITLE__',
    rating: '__RATING__',
    location: '__LOCATION__',
    price: '__PRICE__',
    currency: '__CURRENCY__',
    isSpecialOffer: true,
    className: '__CLASSNAME__',
  };

  it('render component', () => {
    const component = shallow(<TourInfo {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
