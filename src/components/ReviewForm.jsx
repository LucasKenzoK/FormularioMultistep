import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito </p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="neutral"
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Neutro </p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Poderia Ser Melhor </p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="very_satisfied"
            required
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito </p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentario</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiencia"
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
