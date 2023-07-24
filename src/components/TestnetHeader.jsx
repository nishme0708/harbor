import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { COLORS, statusSortOptions } from '../store/Util';
import { updateFilter, updateSortBy } from '../store/actions';
import Dot from './Dot';
import Dropdown from './Dropdown';
import RowWithSeperator from './RowWithSeperator';
import StatusIndicator from './StatusIndicator';
import StatusSort from './StatusSort';
import GutterVertical from './GutterVertical';
import Gutter from './Gutter';

function TestnetHeader({ total, filterOptions }) {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [selectedSort, setSelectedSort] = useState(statusSortOptions[0]);
  const handleFilterChange = (filter) => {
    dispatch(updateFilter(filter.key));
    setSelectedFilter(filter);
  };
  const handleSortChange = (sort) => {
    dispatch(updateSortBy(sort.key));
    setSelectedSort(sort);
  };
  return (
    <div className='flex justify-between items-center'>
      <div className='flex justify-center items-center'>
        <h2 className='text-2xl font-bold'>Testnets ({total})</h2>
        <Gutter spacing={10}></Gutter>
        <span className='text-base font-bold' style={{ color: COLORS.PRIMARY }}>
          + New Testnet
        </span>
      </div>
      <RowWithSeperator seperator={<Dot gap={6} />}>
        <Dropdown
          label={'Filter by'}
          options={filterOptions}
          selected={selectedFilter}
          Component={StatusIndicator}
          handleClick={handleFilterChange}
        ></Dropdown>
        <Dropdown
          label={'Sort by'}
          options={statusSortOptions}
          selected={selectedSort}
          Component={StatusSort}
          handleClick={handleSortChange}
        ></Dropdown>
      </RowWithSeperator>
    </div>
  );
}
export default TestnetHeader;
