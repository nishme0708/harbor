import Icon from './Icon';
import RowWithSeperator from './RowWithSeperator';
import Gutter from './Gutter';
function MenuItems({ items }) {
  return (
    <RowWithSeperator seperator={<Gutter spacing={6}></Gutter>}>
      {items.map((item, index) => {
        return (
          <div className='flex items-center menuItemContainer' key={index}>
            <Icon iconComp={item.icon} color={item.color}></Icon>
            {item.sideIcon && (
              <>
                <Gutter spacing={2}></Gutter>
                <Icon iconComp={item.sideIcon} color={item.color}></Icon>
              </>
            )}
            <Gutter spacing={4}></Gutter>
            <span className='menuText' style={{ color: item.color }}>
              {item.label}
            </span>
          </div>
        );
      })}
    </RowWithSeperator>
  );
}

export default MenuItems;
