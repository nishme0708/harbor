import { statusOptions } from '../store/Util';
import Badge from './Badge';
import Gutter from './Gutter';
import Icon from './Icon';
function StatusIndicator({ status, count, badge }) {
  const { icon, state, label } = statusOptions[status];
  return (
    <span
      className='status-indicator flex items-center justify-center'
      style={{ color: `${state}` }}
    >
      <Icon iconComp={icon} color={state}></Icon>
      <span className='text'>{label}</span>
      {count && (
        <>
          <Gutter spacing={2}></Gutter>
          <span className='count'> ({count})</span>
        </>
      )}
      {badge && (
        <>
          <Gutter spacing={2}></Gutter>
          <Badge text={badge}></Badge>
        </>
      )}
    </span>
  );
}

export default StatusIndicator;
