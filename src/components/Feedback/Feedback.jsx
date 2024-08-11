import css from "./Feedback.module.css";

const Feedback = ({
  feedbacks: { good, bad, neutral },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={css.feedbackWrapper}>
      <p>Good: {Number(good)}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
