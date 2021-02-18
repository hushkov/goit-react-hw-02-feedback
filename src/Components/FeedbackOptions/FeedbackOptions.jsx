const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);

  return names.map(name => {
    return (
      <button type="button" onClick={onLeaveFeedback} name={name} key={name}>
        {name}
      </button>
    );
  });
};

export default FeedbackOptions;
