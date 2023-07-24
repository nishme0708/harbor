import React from 'react';

function ColWithSeperator({ children, seperator }) {
  if (children.length == 0) return null;

  let renderList = [children[0]];
  for (let index = 1; index < children.length; index++) {
    renderList.push(seperator);
    renderList.push(children[index]);
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      {renderList.map((item, index) => {
        return <React.Fragment key={index}>{item}</React.Fragment>;
      })}
    </div>
  );
}
export default ColWithSeperator;
