import Gutter from './Gutter';
import Icon from './Icon';

function UpdatingInfo({ text, color, icon }) {
  return (
    <div className='flex items-center' style={{ color: color }}>
      <Icon iconComp={icon} color={color}></Icon>
      <Gutter spacing={3}></Gutter>
      <span className='font-semibold text-sm'>{text}</span>
    </div>
  );
}
export default UpdatingInfo;
