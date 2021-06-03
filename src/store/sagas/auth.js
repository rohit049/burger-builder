import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put(actions.authLogoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=<paste_your_api_key_here>';

  if (!action.isSignUp) {
    console.log('is signed up!!!');
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=<paste_your_api-key_here>';
  }
  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);

    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn || 3600));
  } catch (err) {
    put(actions.authFail(err.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    return yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
    if (expirationDate > new Date()) {
      const userId = yield localStorage.getItem('userId');
      yield put(actions.authSuccess(token, userId));
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      return yield put(actions.logout());
    }
  }
}
