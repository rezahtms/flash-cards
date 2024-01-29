const Card = ({ question, handleClick, selectId }) => {
  return (
    <div
      className={question.id === selectId ? "selected" : ""}
      onClick={() => handleClick(question.id)}
    >
      <p>{selectId !== question.id ? question.question : question.answer}</p>
    </div>
  );
};

export default Card;
