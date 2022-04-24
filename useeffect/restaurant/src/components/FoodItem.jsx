import react from "react";
import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  const {
    strMealThumb,
    strMeal,
    price,
    rating,
    votes,
    category,
    payment,
    reviews,
  } = props;

  console.log(category);

  return (
    <div className={styles.item}>
      <div>
        <img src={strMealThumb} alt={strMeal} />
        <div className={styles.titleDiv}>
          <h3>{strMeal}</h3>
          <p>{category}</p>
          <p>Cost {price} for one.</p>
          <h6>Accepts online payments only.</h6>
        </div>
        <div className={styles.ratingsDiv}>
          <div>
            <div>{rating}</div>
          </div>
          <p>{votes} votes</p>
          <p>{reviews} reviews</p>
        </div>
      </div>
      <div className={styles.lastDiv}>
        <button>Order Online▶️</button>
      </div>
    </div>
  );
};

export default FoodItem;