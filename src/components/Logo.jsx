export const LOGOS = {
  alchemy: 'Alchemy.png',
  arbitrum: 'Arbitrum.png',
  ethereum: 'Ethereum.png',
  fantom: 'Fantom.png',
  optimism: 'Optimism.png',
  polygon: 'Polygon.png',
};

const LOGO_PATH = '/logos/';

function Logo({ logo, customStyle }) {
  return (
    <span className='logoContainer bg-white' style={{ ...customStyle }}>
      <img src={`${LOGO_PATH}${logo}`} alt='' />
    </span>
  );
}

export default Logo;
