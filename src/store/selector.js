import { sortOptions } from './Util';

const getTestnets = (state) => {
  if (state.loading) {
    return null;
  }
  if (state.error) {
    return [];
  }
  let filteredList = state.testnets || [];
  if (state.filter) {
    filteredList = filteredList.filter((item) => {
      return item.status == state.filter;
    });
  }
  if (state.sort) {
    let sorter = sortOptions[state.sort];
    if (sorter.custom) {
      let filterObj = {};
      filteredList.forEach((testnet) => {
        let status = testnet.status;
        if (!filterObj[status]) {
          filterObj[status] = 0;
        }
        filterObj[status] += 1;
      });
      filteredList = filteredList.sort((a, b) => {
        let aCount = filterObj[a.status];
        let bCount = filterObj[b.status];
        return aCount - bCount;
      });
    } else {
      filteredList = filteredList.sort(sorter.comparator);
    }
  }
  return [...filteredList];
};

export default getTestnets;
