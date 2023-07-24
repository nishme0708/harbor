import { COLORS } from '../store/Util';
import Icon, { ICONS } from './Icon';
function BrandLogo() {
  return (
    <Icon
      iconComp={ICONS.HARBOR_LOGO}
      color={COLORS.WHITE}
      customStyle={{ height: '22px', width: 'auto' }}
    ></Icon>
  );
}
export default BrandLogo;
