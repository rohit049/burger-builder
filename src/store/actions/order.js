import * as actionType from './actionTypes';

export const purchaseBurgerSuccess = (id, data) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: data,
  };
};

export const purchaseBurgerFailure = (error) => {
  return {
    type: actionType.PURCHASE_BURGER_FAIL,
    error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionType.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: actionType.PURCHASE_BURGER,
    orderData,
    token,
  };
};

export const purchaseInit = () => {
  return {
    type: actionType.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionType.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionType.FETCH_ORDERS_FAIL,
    error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionType.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionType.FETCH_ORDERS,
    token,
    userId,
  };
};
