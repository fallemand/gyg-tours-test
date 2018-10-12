import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_tour-info.scss';

const TourInfo = ({
  className, image, title, rating, price, currency, isSpecialOffer, onClick,
}) => (
  <div onClick={onClick} className={classnames(className, 'tour-info')}>
    <img className="tour-info__logo" src={image} alt="Tour Logo" />
    <div className="tour-info__content">
      <h2 className="tour-info__title">{title}</h2>
      <span className="tour-info__rating">
        {rating}
        <small> /5</small>
      </span>
      <p className="tour-info__price">
        {currency}
        {price}
      </p>
    </div>
  </div>
);

TourInfo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
};

TourInfo.defaultProps = {
  className: null,
  onClick: null,
};

export default TourInfo;
