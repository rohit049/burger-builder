import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initIngredientSaga(action) {
  try {
    const response = yield axios.get('ingredients.json');
    return yield put(actions.setIngredient(response.data));
  } catch (error) {
    return put(actions.setError(true));
  }
}
