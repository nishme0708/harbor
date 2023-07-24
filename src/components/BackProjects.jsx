import StatusIndicator from './StatusIndicator';

function BackProjects({ text }) {
  return (
    <div className='flex justify-start items-center back w-full'>
      <StatusIndicator status={'BACK'}></StatusIndicator>
    </div>
  );
}

export default BackProjects;
