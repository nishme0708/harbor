import { ICONS } from '../components/Icon';
import { COLORS } from './Util';
import * as actionTypes from './actionTypes';

const initialState = {
  testnets: null,
  loading: false,
  filter: '',
  sort: 'alphaASC',
  error: null,
  filterOptions: [],
};

const generateFilterOptions = (testnets) => {
  let filterOptions = [
    {
      key: '',
      props: {
        status: 'ALL',
      },
    },
  ];
  let filterObj = {};
  testnets.forEach((testnet) => {
    let status = testnet.status;
    if (!filterObj[status]) {
      filterObj[status] = 0;
    }
    filterObj[status] += 1;
  });
  for (let keyValue of Object.keys(filterObj)) {
    filterOptions.push({
      key: keyValue,
      props: {
        status: keyValue,
        count: filterObj[keyValue],
      },
    });
  }
  return filterOptions;
};
const testnets = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TESTNETS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_TESTNETS_SUCCESS:
      return {
        ...state,
        loading: false,
        testnets: action.payload.items,
        filterOptions: generateFilterOptions(action.payload.items),
      };

    case actionTypes.FETCH_TESTNETS_ERROR:
      return {
        ...state,
        testnets: [],
        loading: false,
        error: action.payload.error,
      };

    case actionTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case actionTypes.UPDATE_SORTBY:
      return {
        ...state,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
};

export default testnets;
