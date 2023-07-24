import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../store/Util';
import { fetchData } from '../store/fetchData';
import getTestnets from '../store/selector';
import { ICONS } from './Icon';
import Loader from './Loader';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TestnetContainer from './TestnetContainer';

function Harbor() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(dispatch);
  }, []);
  const menuItems = [
    {
      icon: ICONS.PROJECTS,
      label: 'Projects',
      color: COLORS.INACTIVE,
    },
    {
      icon: ICONS.DOCS,
      label: 'Docs',
      color: COLORS.INACTIVE,
    },
    {
      icon: ICONS.COMMAND_SHEET,
      label: 'Command cheatsheet',
      color: COLORS.INACTIVE,
    },
  ];

  const userItems = [
    {
      icon: ICONS.USER_KEY,
      label: 'Your UserKey',
      color: COLORS.INACTIVE,
    },
    {
      icon: ICONS.MEMBERS,
      sideIcon: ICONS.ARROW_DOWN_SHORT,
      color: COLORS.INACTIVE,
    },
  ];

  let list = useSelector(getTestnets);
  if (list == null) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Navbar menuItems={menuItems} userItems={userItems}></Navbar>
      <div className='main relative flex h-100'>
        <div className='basis-1/5 relative '>
          <Sidebar></Sidebar>
        </div>
        <div className='basis-4/5 testnetBackground'>
          {list && list.length && (
            <TestnetContainer testnets={list}></TestnetContainer>
          )}
        </div>
      </div>
    </>
  );
}
export default Harbor;
