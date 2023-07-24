import { COLORS } from '../store/Util';
import Gutter from './Gutter';
import Icon, { ICONS } from './Icon';

function Modified({ dateTime }) {
  const getTimeAgo = function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes ago';
    }
    return 'now';
  };
  const timeString = getTimeAgo(new Date(dateTime));
  return (
    <div
      className='flex justify-center items-center text-xs'
      style={{ color: COLORS.INACTIVE }}
    >
      <Icon iconComp={ICONS.CLOCK} color={COLORS.INACTIVE}></Icon>
      <Gutter spacing={2}></Gutter>
      <span className='modified'>Modified </span>
      <Gutter spacing={2}></Gutter>
      <span className='ago'>{timeString}</span>
    </div>
  );
}
export default Modified;
