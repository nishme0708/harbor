import AcmeSidebar from './AcmeSidebar';
import BackProjects from './BackProjects';

function Sidebar() {
  return (
    <div className='sidebar bg-white absolute right-0 bottom-0 left-0 top-0 h-full overflow-hidden'>
      <div className='flex flex-col items-start'>
        <BackProjects></BackProjects>
        <AcmeSidebar></AcmeSidebar>
      </div>
    </div>
  );
}

export default Sidebar;
