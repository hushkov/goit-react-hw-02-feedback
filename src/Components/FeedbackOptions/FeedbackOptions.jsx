import PropTypes from 'prop-types';
import s from 'Components/FeedbackOptions/FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);

  return names.map(name => {
    return (
      <button
        type="button"
        onClick={onLeaveFeedback}
        name={name}
        key={name}
        className={s.button}
      >
        {name}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
