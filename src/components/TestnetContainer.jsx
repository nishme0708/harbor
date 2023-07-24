import { useSelector } from 'react-redux';
import ColWithSeperator from './ColWithSeperator';
import GutterVertical from './GutterVertical';
import Testnet from './Testnet';
import TestnetHeader from './TestnetHeader';

function TestnetContainer({ testnets }) {
  const filterOptions = useSelector((state) => state.filterOptions);
  return (
    <div className='testnetContainer flex flex-col'>
      <TestnetHeader
        total={testnets.length}
        filterOptions={filterOptions}
        sortOptions={[]}
      ></TestnetHeader>
      <GutterVertical spacing={10}></GutterVertical>
      <ColWithSeperator seperator={<GutterVertical spacing={12} />}>
        {testnets.map((testnet) => (
          <Testnet key={testnet.id} testnet={testnet}></Testnet>
        ))}
      </ColWithSeperator>
    </div>
  );
}

export default TestnetContainer;
