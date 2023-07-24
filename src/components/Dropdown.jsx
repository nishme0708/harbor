import React, { useEffect, useRef, useState } from 'react';
import Gutter from './Gutter';
import { COLORS } from '../store/Util';
import Icon, { ICONS } from './Icon';

function Dropdown({ label, options, handleClick, selected, Component }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  const close = () => setShowDropdown((val) => false);

  const optionSelect = (index) => {
    const newSelected = options[index];
    if (newSelected != selected) {
      handleClick(newSelected);
    }
    close();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (showDropdown) {
          close();
        }
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [close]);
  const renderOptions = () => {
    return (
      <div
        className='dropdownOptions flex flex-col w-52 absolute right-0 bg-white'
        ref={ref}
      >
        {options.map((option, index) => {
          let active = option == selected;
          let classes = 'dropdownOption ';
          if (active) {
            classes += 'active';
          }
          return (
            <span
              className={classes}
              onClick={() => optionSelect(index)}
              key={option.key}
            >
              <Component {...option.props}></Component>
            </span>
          );
        })}
      </div>
    );
  };
  return (
    <div className='relative w-fit'>
      <button
        type='button'
        className='flex items-center'
        onClick={() => setShowDropdown((val) => !val)}
      >
        <span style={{ color: COLORS.BADGE_TEXT }} className='text-sm	font-medium'>
          {label}:{' '}
        </span>
        <Gutter spacing={2}></Gutter>
        <Component {...selected.props}></Component>
        <Gutter spacing={2}></Gutter>
        <Icon
          iconComp={ICONS.ARROW_DOWN_SHORT}
          color={COLORS.GRAY}
          customStyle={{ width: '8px' }}
        ></Icon>
      </button>
      {showDropdown && renderOptions()}
    </div>
  );
}

export default Dropdown;
