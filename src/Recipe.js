import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
  let key = 0;
  return (
    <div className={style.recipe}>
      <h1>{props.title.toUpperCase()}</h1>
      <p>
        Calories: <span>{props.calories}</span>
      </p>
      <img
        className={style.image}
        src={props.image}
        alt={`${props.title} img`}
      />
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={`\'${key++}\'`}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
