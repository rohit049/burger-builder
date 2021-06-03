import * as actionType from './actionTypes';

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  return {
    type: actionType.AUTH_INITIATE_LOGOUT,
  };
};

export const authLogoutSucceed = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionType.AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionType.AUTH,
    email,
    password,
    isSignUp,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionType.SET_AUTH_REDIRECT_PATH,
    path,
  };
};

export const authCheckState = () => {
  return {
    type: actionType.AUTH_CHECK_STATE,
  };
};
