function TestnetName({ name }) {
  let formattedName = name.replaceAll('-', ' ');
  return <h2 className='capitalize text-xl font-bold'>{formattedName}</h2>;
}
export default TestnetName;
