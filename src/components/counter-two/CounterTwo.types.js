import PropTypes from 'prop-types';

export const CounterTwoProps = {
  count: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func
};
