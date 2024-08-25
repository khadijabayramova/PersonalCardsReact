import { useState } from "react";
import styles from "./styles.module.css";

function Cards(props) {
  const { image, name, occupation, onClick } = props;

  const [rating, setRating] = useState(0);

  return (
    <div className={styles.Card}>
      <img onClick={onClick} src={image} alt="img" />
      <div className={styles.Rating}>
        <button
          onClick={() => {
            if (rating > 0) {
              setRating(rating - 1);
            }
          }}
        >
          -
        </button>

        <div className={styles.rating}>{rating}</div>

        <button
          onClick={() => {
            if (rating < 5) {
              setRating(rating + 1);
            }
          }}
        >
          +
        </button>
      </div>

      <h1 onClick={onClick}>{name}</h1>
      <p>{occupation}</p>
    </div>
  );
}

export default Cards;
