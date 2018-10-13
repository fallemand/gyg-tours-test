import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import queryString from 'query-string';
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';
import TourInfo from '../../components/TourInfo';
import Pagination from '../../components/Pagination';
import toursService from '../../services/tours.service';
import './tours.scss';

class ToursPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSortChange = this.onSortChange.bind(this);
    this.onFilterSubmit = this.onFilterSubmit.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.setQueryParams = this.setQueryParams.bind(this);
    this.getParamsFromUrl = this.getParamsFromUrl.bind(this);
    this.loadData = this.loadData.bind(this);
    this.pageSize = 5;
    this.state = {
      tours: [],
      sortOrder: false,
      loading: true,
      page: 1,
    };
  }

  componentWillMount() {
    const params = this.getParamsFromUrl();
    this.loadData(params);
  }

  onSortChange(data) {
    const { field, order } = data;
    if (field) {
      this.loadData({ sort: field, sortOrder: order });
    }
  }

  onFilterSubmit(query) {
    const { field, value } = query;
    if (field) {
      this.loadData({ filter: field, value, page: 1 });
    }
  }

  onFilterChange(data) {
    const { field, value } = data;
    this.setState({ filter: field, value });
  }

  onPageChange(pageNumber) {
    this.loadData({ page: pageNumber });
  }

  setQueryParams(query) {
    const { location, history } = this.props;
    const queryParams = queryString.parse(location.search);
    const newQueryParams = Object.assign({}, queryParams, query);
    if (JSON.stringify(queryParams) !== JSON.stringify(newQueryParams)) {
      const queryParamsString = `?${queryString.stringify(newQueryParams)}`;
      history.push({
        pathname: '/tours',
        search: queryParamsString,
      });
    }
  }

  getParamsFromUrl() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    return params;
  }

  completeSearchParams(params) {
    const { pageSize, state: { filter, sort, sortOrder, page, value } } = this;
    return {
      filter,
      sort,
      sortOrder,
      page,
      pageSize,
      value,
      ...params,
    };
  }

  loadData(params) {
    const completeParams = this.completeSearchParams(params);
    this.setState({
      loading: true,
    });
    const { total, tours } = toursService.getTours(completeParams);
    this.setQueryParams(params);
    this.setState({
      ...completeParams,
      sortOrder: !!completeParams.sortOrder, // parse to boolean
      tours,
      total,
    });
    // This is in order to force the loading to show for demo
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1300);
  }

  render() {
    const { tours, sort, sortOrder, filter, value, total, page, loading } = this.state;
    const filterFields = [
      { value: 'title', label: 'Title' },
      { value: 'price', label: 'Price' },
      { value: 'rating', label: 'Rating' },
    ];
    const sortFields = filterFields.concat(
      [{ value: 'isSpecialOffer', label: 'Special Offer' }],
    );
    return (
      <div className="tours">
        <div className="tours__list">
          <div className="tours__list-actions">
            <Sort
              name="sort"
              title="Sort"
              field={sort}
              order={sortOrder}
              className="tours__list-sort"
              onChange={this.onSortChange}
              fields={sortFields}
            />
            <Filter
              className="tours__list-filter"
              field={filter}
              value={value}
              onFilter={this.onFilterSubmit}
              onChange={this.onFilterChange}
              fields={filterFields}
            />
          </div>
          <div className={classnames(
            'tours__list-tours',
            { 'tours__list-tours--loading': loading },
          )}
          >
            {
              tours.map((tour, index) => (
                <TourInfo
                  key={tour.title}
                  onClick={() => (console.log(`Clicked: ${tour.title}`))}
                  image={`https://picsum.photos/210/140/?image=2${index}`}
                  {...tour}
                />
              ))
            }
          </div>
          { total > 1 && (
            <Pagination
              active={parseInt(page, 10)}
              total={total}
              show={this.pageSize}
              onChange={this.onPageChange}
            />
          )}
        </div>
      </div>
    );
  }
}

ToursPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(ToursPage);
