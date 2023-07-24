import { COLORS } from '../store/Util';
import Badge from './Badge';
import Blockchains from './Blockchains';
import Dot from './Dot';
import Gutter from './Gutter';
import GutterVertical from './GutterVertical';
import { ICONS } from './Icon';
import { LOGOS } from './Logo';
import Modified from './Modified';
import OffChainActors from './OffChainActors';
import RowWithSeperator from './RowWithSeperator';
import StatusIndicator from './StatusIndicator';
import TestnetName from './TestnetName';
import UpdatingInfo from './UpdatingInfo';

function Testnet({ testnet }) {
  const failed = testnet?.status == 'STOPPED';
  let classes = 'testnet bg-white w-full ';
  if (failed) {
    classes += 'failed';
  }
  const chainUpdate = 'off-chain updating';
  const blockUpdate = 'Blockchains updating';
  let totalChainUpdate = 0;
  testnet?.testnet_off_chain_actors?.forEach((item) => {
    if (item?.status == 'PENDING') {
      totalChainUpdate++;
    }
  });
  const logos = testnet?.testnet_chains.map((chain) => LOGOS[chain?.chain]);
  return (
    <div className={classes}>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <RowWithSeperator seperator={<Gutter spacing={8} />}>
            <TestnetName name={testnet.name}></TestnetName>
            <Badge text={testnet.id}></Badge>
          </RowWithSeperator>
          <RowWithSeperator seperator={<Dot gap={8} />}>
            <StatusIndicator status={testnet.status}></StatusIndicator>
            <StatusIndicator
              status={
                testnet.status == 'RUNNING'
                  ? 'SETTINGS_ACTIVE'
                  : 'SETTINGS_INACTIVE'
              }
            ></StatusIndicator>
          </RowWithSeperator>
        </div>
        <GutterVertical spacing={4}></GutterVertical>
        <div className='flex justify-between'>
          <RowWithSeperator seperator={<Dot gap={6} />}>
            <OffChainActors
              total={testnet.testnet_off_chain_actors.length}
            ></OffChainActors>
            <Blockchains logos={logos}></Blockchains>
          </RowWithSeperator>
          <Modified dateTime={testnet.updated_at}></Modified>
        </div>
        {totalChainUpdate > 0 && (
          <>
            <GutterVertical spacing={4}></GutterVertical>
            <div className='flex'>
              <RowWithSeperator seperator={<Dot gap={6} />}>
                <UpdatingInfo
                  icon={ICONS.STANDING_UP_HOUR_GLASS}
                  color={COLORS.PROGRESS}
                  text={`${totalChainUpdate} ${chainUpdate}`}
                ></UpdatingInfo>
                <UpdatingInfo
                  icon={ICONS.STANDING_UP_HOUR_GLASS}
                  color={COLORS.PROGRESS}
                  text={blockUpdate}
                ></UpdatingInfo>
              </RowWithSeperator>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Testnet;
