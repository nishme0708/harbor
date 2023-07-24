import { COLORS } from '../store/Util';
import Gutter from './Gutter';
import Icon, { ICONS } from './Icon';
import StatusIndicator from './StatusIndicator';
function AcmeSidebar() {
  const menuItems = [
    {
      name: 'TESTNET',
      badge: '8',
      icon: ICONS.ADD,
    },
    {
      name: 'MEMBERS',
      badge: '1',
      icon: ICONS.ADD,
    },
    {
      name: 'PROJECT_KEY',
      icon: ICONS.CLONING,
    },
  ];
  return (
    <div className='w-full flex flex-col sidebarContainer cursor-pointer'>
      <div className=' flex items-center sidebarHeading'>
        <Icon iconComp={ICONS.STAR_IN_PROJECT} color={COLORS.INACTIVE}></Icon>
        <Gutter spacing={6}></Gutter>
        <span className='text-black'>Acme frontend</span>
      </div>
      {menuItems.map((menu, index) => {
        return (
          <div
            className='flex items-center justify-between sidebarItem'
            key={index}
          >
            <StatusIndicator
              status={menu.name}
              badge={menu.badge}
            ></StatusIndicator>
            <Icon
              iconComp={menu.icon}
              color={COLORS.INACTIVE}
              customStyle={{ width: '12px', height: '12px' }}
            ></Icon>
          </div>
        );
      })}
    </div>
  );
}

export default AcmeSidebar;
