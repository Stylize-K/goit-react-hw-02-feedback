import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, iconsButton }) => {
  return (
    <div className={css.feedbackWrapper}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            <div className={css.button_wrapper}>
              {iconsButton[option]}
              {option}
            </div>
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
