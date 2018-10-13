import toursData from './data/tours';

/**
 * Get tours list with filter, sort, and page params.
 * @param {Object} params to filter and sort response - [optional]
 * @returns {Object} tours: list of tours, total: total tours
 */
const getTours = ({ filter, value, sort, sortOrder, page, pageSize }) => {
  let { tours } = toursData;
  if (filter) {
    tours = tours.filter(
      tour => tour[filter].toLowerCase().includes(value.toLowerCase()),
    );
  }

  if (sort) {
    tours.sort((a, b) => {
      let result;
      if (typeof a[sort] === 'boolean') {
        result = b[sort] - a[sort];
      } else {
        result = parseFloat(a[sort]) - parseFloat(b[sort]);
        if (Number.isNaN(result)) {
          result = a[sort].localeCompare(b[sort]);
        }
      }
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!sortOrder) {
        result *= -1;
      }
      return result;
    });
  }

  let paginatedResults = tours;
  if (page) {
    const startElement = (page - 1) * pageSize;
    const endElement = page * pageSize;
    paginatedResults = paginatedResults.slice(startElement, endElement);
  }

  return {
    tours: paginatedResults,
    total: tours.length,
  };
};

export default {
  getTours,
};
