import {
  fetchTestnets,
  fetchTestnetsError,
  fetchTestnetsSuccess,
} from './actions';

export function fetchData(dispatch) {
  dispatch(fetchTestnets());
  fetch('http://localhost:3000/testnets')
    .then((res) => res.json())
    .then((response) => {
      dispatch(fetchTestnetsSuccess(response?.data?.testnet));
    })
    .catch((error) => {
      dispatch(fetchTestnetsError(error));
    });
}
