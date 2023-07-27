import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Question({ q, handleClickAnswer, id }) {
  const { answers } = q;

  const handleClick = (answer) => {
    handleClickAnswer(id, answer);
  };

  const answersElements = answers.map((answer) => {
    let id = null;
    if (q.checked) {
      if (q.correct === answer) {
        id = 'correct';
      } else if (q.selected === answer) {
        id = 'incorrect';
      } else {
        id = 'not-selected';
      }
    }
    return (
      <button key={nanoid()} id={id} className={q.selected === answer ? 'answer selected' : 'answer'} type="button" onClick={() => handleClick(answer)}>
        {answer}
      </button>
    );
  });
  return (
    <>
      <div className="flex flex-col">
        {q.question}
        {answersElements}
      </div>
      <div className="line" />
    </>
  );
}

Question.propTypes = {
  q: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    question: PropTypes.string,
    correct: PropTypes.string,
    selected: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Question;
