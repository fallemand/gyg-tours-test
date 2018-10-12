import toursService from '../../../app/services/tours.service';

describe('toursService', () => {
  it('restaurantsList should call /api/restaurants with token', async () => {
    await toursService.getTours();
    expect(fetch).toHaveBeenCalledWith(
      '/api/restaurants',
      { headers: { token: '__TOKEN__' } },
    );
  });
  it('restaurantDetail should call /api/restaurants/{id} with token', async () => {
    await toursService.getTours(22);
    expect(fetch).toHaveBeenCalledWith(
      '/api/restaurants/22',
      { headers: { token: '__TOKEN__' } },
    );
  });
});
