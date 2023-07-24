import BrandLogo from './BrandLogo';
import Gutter from './Gutter';
import MenuItems from './MenuItems';

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
      </div>
    </nav>
  );
}

export default Navbar;
