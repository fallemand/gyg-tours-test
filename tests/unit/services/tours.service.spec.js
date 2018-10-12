import toursService from '../../../app/services/tours.service';

jest.mock('../../../app/services/data/tours', () => ({
  tours: [
    {
      title: 'Tour 1',
      price: '15',
    },
    {
      title: 'Tour 2',
      price: '10',
    }],
}));

describe('toursService', () => {
  it('test getGames()', () => {
    const tours = toursService.getTours({});
    expect(typeof tours).toBe('object');
    expect(tours).toEqual({
      total: 2,
      tours: [{
        title: 'Tour 1',
        price: '15',
      },
      {
        title: 'Tour 2',
        price: '10',
      }],
    });
  });

  it('should filter results', () => {
    const tours = toursService.getTours({ filter: 'title', value: 'Tour 1' });
    expect(typeof tours).toBe('object');
    expect(tours).toEqual({
      total: 1,
      tours: [{
        title: 'Tour 1',
        price: '15',
      }],
    });
  });

  it('should sort results', () => {
    const tours = toursService.getTours({ sort: 'price', sortOrder: false });
    expect(typeof tours).toBe('object');
    expect(tours).toEqual({
      total: 2,
      tours: [{
        title: 'Tour 2',
        price: '10',
      },
      {
        title: 'Tour 1',
        price: '15',
      },
      ],
    });
  });
});
