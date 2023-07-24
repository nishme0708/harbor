function Badge({ text }) {
  if (!text || !text.slice) return null;
  let display = text;
  if (text.length > 4) {
    display = text.slice(-4);
  }
  return <span className='badge font-semibold'>{display}</span>;
}

export default Badge;
