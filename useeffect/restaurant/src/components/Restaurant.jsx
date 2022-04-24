import React from "react";
import { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import { nanoid } from "nanoid";
import styles from "./Restaurant.module.css";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClick = async (num) => {
    let response = await fetch(`http://localhost:3000/meals`);
    let data = await response.json();
    const newData = data.filter((item) => item.rating >= num);

    newData.sort((a, b) => {
      return a.rating - b.rating;
    });
    console.log(newData);
    setData(newData);
  };

  const handleSorting1 = async () => {
    let response = await fetch(`http://localhost:3000/meals`);
    let data = await response.json();
    console.log(data);
    const newData = data.sort((a, b) => {
      return a.rating - b.rating;
    });
    setData(newData);
  };

  const handleSorting2 = async () => {
    let response = await fetch(`http://localhost:3000/meals`);
    let data = await response.json();

    const newData = data.sort((a, b) => {
      return b.rating - a.rating;
    });
    setData(newData);
  };

  useEffect(() => {
    const ResData = async () => {
      try {
        let response = await fetch(
          `http://localhost:3000/meals?_page=${pageNumber}&_limit=6`
        );
        let data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    ResData();
  }, [pageNumber]);

  console.log(data);
  return (
    <div>
      <div className={styles.btns}>
        <h3>Sort by Rating : </h3>
        <button onClick={() => handleClick(1)}>1⭐</button>
        <button onClick={() => handleClick(2)}>2⭐</button>
        <button onClick={() => handleClick(3)}>3⭐</button>
        <button onClick={() => handleClick(4)}>4⭐</button>
        <button onClick={handleSorting1}>Low To High</button>
        <button onClick={handleSorting2}>High To Low</button>
      </div>
      <div className={styles.container}>
        {data.map((item) => {
          return <FoodItem key={nanoid()} {...item} />;
        })}
      </div>
      <div className={styles.prevNext}>
        <button onClick={() => setPageNumber((prev) => prev - 1)}>Prev</button>
        <button onClick={() => setPageNumber((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};
export default Restaurant;