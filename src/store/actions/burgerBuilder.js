import * as actionType from './actionTypes';

export const addIngredient = (ingredientName) => {
  return {
    type: actionType.ADD_INGREDIENT,
    ingredientName,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: actionType.REMOVE_INGREDIENT,
    ingredientName,
  };
};

export const setIngredient = (ingredients) => {
  return {
    type: actionType.SET_INGREDIENT,
    ingredients,
  };
};

export const setError = (err) => {
  return {
    type: actionType.FETCH_INGREDIENTS_FAILED,
    error: err,
  };
};

export const initIngredient = () => {
  return {
    type: actionType.INIT_INGREDIENT,
  };
};
