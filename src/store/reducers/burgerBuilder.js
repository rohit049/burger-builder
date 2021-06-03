import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const initialstate = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const calcTotalPriceInitially = (ingredients) => {
  let basePrice = 0;
  let ingredientArray = [];
  for (let key in ingredients) {
    ingredientArray.push(key);
  }
  ingredientArray.map((igKey) => (basePrice += INGREDIENT_PRICES[igKey] * ingredients[igKey]));
  return initialstate.totalPrice + basePrice;
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedState = {
    ingredients: updateObject(state.ingredients, updatedIngredient),
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedState = {
    ingredients: updateObject(state.ingredients, updatedIngredient),
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: calcTotalPriceInitially(action.ingredients),
    error: false,
    building: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionType.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionType.SET_INGREDIENT:
      return setIngredients(state, action);
    case actionType.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
