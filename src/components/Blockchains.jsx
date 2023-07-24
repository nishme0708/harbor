import RowWithSeperator from './RowWithSeperator';
import Gutter from './Gutter';
import RowLogos from './RowLogos';

function Blockchains({ logos }) {
  return (
    <RowWithSeperator seperator={<Gutter spacing={6}></Gutter>}>
      <span className='totalBlockchains text-sm	'>{logos.length} Blockchains</span>
      <RowLogos logos={logos}></RowLogos>
    </RowWithSeperator>
  );
}

export default Blockchains;
