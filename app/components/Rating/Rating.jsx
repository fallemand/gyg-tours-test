import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_rating.scss';

const Rating = ({ className, value }) => (
  <div className={classnames(className, 'rating')}>
    <div className="rating__stars">
      {Array.from({ length: 5 }, (x, i) => i + 1).map(number => (
        <span
          key={number}
          className={classnames('rating__star', { 'rating__star--filled': (number <= value) })}
        >
            &#9733;
        </span>
      ))}
    </div>
    <span className="rating__info">
      {value}
      <small> /5</small>
    </span>
  </div>
);


Rating.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  className: null,
};

export default Rating;
