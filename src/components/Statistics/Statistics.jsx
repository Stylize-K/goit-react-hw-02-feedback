import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statWrapper}>
      <p className={css.stat}>Good: {good} </p>
      <p className={css.stat}>Neutral: {neutral} </p>
      <p className={css.stat}>Bad: {bad} </p>
      <p className={css.stat}>Total: {total} </p>
      <p className={css.stat}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
