import { COLORS } from '../store/Util';
import BrandLogo from './BrandLogo';
import Gutter from './Gutter';
import Icon, { ICONS } from './Icon';
import MenuItems from './MenuItems';
import StatusIndicator from './StatusIndicator';

function Navbar({ menuItems, userItems }) {
  return (
    <nav className='navbar relative flex w-full flex-nowrap items-center justify-between'>
      <div className='navbarWrapper flex  items-center'>
        <BrandLogo></BrandLogo>
        <Gutter spacing={20}></Gutter>
        <MenuItems items={menuItems}></MenuItems>
      </div>
      <div className='flex  items-center'>
      <MenuItems items={userItems}></MenuItems>
        {/* <StatusIndicator status={'USER_KEY'}></StatusIndicator>
        <Gutter spacing={10}></Gutter>
        <Icon iconComp={ICONS.MEMBERS} color={COLORS.INACTIVE}></Icon>
        <Icon iconComp={ICONS.ARROW_DOWN_SHORT} color={COLORS.INACTIVE}></Icon> */}
      </div>
    </nav>
  );
}

export default Navbar;
