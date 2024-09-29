import React from 'react';

const App = () => {
  return (
    <div className="bg-[#F5F7F8] h-screen w-screen flex justify-center items-center gap-2 p-2">
      <div className='bg-slate-900 w-1/2 h-full rounded-xl flex flex-col gap-2 p-2'>
        <div className='w-full bg-[#F5F7F8] h-1/2 rounded-lg flex justify-center items-center'>
          <h1>Layout 1</h1>
        </div>

        <div className='w-full bg-[#F5F7F8] h-1/2 rounded-lg flex justify-center items-center'>
          <h1>Layout 2</h1>
        </div>
      </div>
      <div className='bg-slate-900 w-1/2 h-full rounded-xl'>
        
      </div>
    </div>
  );
};

export default App;
