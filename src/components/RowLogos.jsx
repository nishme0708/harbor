import Logo from './Logo';

function RowLogos({ logos }) {
  const LEFT_SPACING = 20;
  const getLeft = (index) => {
    return LEFT_SPACING * index;
  };
  const containerWidth =
    LEFT_SPACING * (logos.length - 1) + (LEFT_SPACING + 10);
  return (
    <div className='relative rowlogos' style={{ width: `${containerWidth}px` }}>
      {logos.map((logo, index) => {
        const left = getLeft(index) + 'px';
        return (
          <Logo
            key={index}
            logo={logo}
            customStyle={{
              position: 'absolute',
              left: `${left}`,
              zIndex: `${index}`,
            }}
          />
        );
      })}
    </div>
  );
}
export default RowLogos;
