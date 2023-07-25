import {
  fetchTestnets,
  fetchTestnetsError,
  fetchTestnetsSuccess,
} from './actions';

export function fetchData(dispatch) {
  dispatch(fetchTestnets());
  fetch('https://api.jsonbin.io/v3/b/64bf134f8e4aa6225ec2eb45')
    .then((res) => res.json())
    .then((response) => {
      dispatch(fetchTestnetsSuccess(response?.record?.data?.testnet));
    })
    .catch((error) => {
      dispatch(fetchTestnetsError(error));
    });
}
