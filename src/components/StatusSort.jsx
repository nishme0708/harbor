import { COLORS } from '../store/Util';

function StatusSort({ text }) {
  return (
    <h2 className='text-sm' style={{ color: COLORS.GRAY }}>
      {text}
    </h2>
  );
}
export default StatusSort;
