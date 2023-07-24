import * as actionTypes from './actionTypes';

export const fetchTestnets = () => {
  return {
    type: actionTypes.FETCH_TESTNETS,
  };
};

export const fetchTestnetsSuccess = (items) => {
  return {
    type: actionTypes.FETCH_TESTNETS_SUCCESS,
    payload: {
      items,
    },
  };
};

export const fetchTestnetsError = (error) => {
  return {
    type: actionTypes.FETCH_TESTNETS_ERROR,
    payload: {
      error,
    },
  };
};

export const updateFilter = (filter) => {
  return {
    type: actionTypes.UPDATE_FILTER,
    payload: {
      filter,
    },
  };
};

export const updateSortBy = (sort) => {
  return {
    type: actionTypes.UPDATE_SORTBY,
    payload: {
      sort,
    },
  };
};
