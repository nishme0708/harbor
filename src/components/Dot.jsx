function Dot({ gap }) {
  if (gap) {
    gap += 'px';
  }
  return (
    <span
      className='flex items-center justify-center dotContainer'
      style={{ margin: `0px ${gap}` }}
    >
      <span className='dot'></span>
    </span>
  );
}
export default Dot;
