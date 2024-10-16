import React from 'react';
import speed from '../image/speedometer.png'

const App = () => {
  return (
    <>
      <div className='h-screen w-screen bg-slate-50 flex flex-col'>
        <div className='text-center'></div>
        <div className='h-1/2 flex flex-col p-10 justify-center'>
          <div className='bg-slate-100 border h-5/6 rounded-2xl p-5 shadow-lg flex justify-around gap-10 items-center'>
    
            <div className=' border w-1/5 h-1/3 rounded-2xl shadow-lg flex justify-around items-center p-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-mono'>Current (A)</p>
                <p className='text-2xl font-mono'>7.00</p>
              </div>
            </div>

            <div className=' border w-1/5 h-1/3 rounded-2xl shadow-lg flex justify-around items-center p-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-mono'>Speed (RPM)</p>
                <p className='text-2xl font-mono'>1500</p>
              </div>            
            </div>

            <div className=' border w-1/5 h-1/3 rounded-2xl shadow-lg flex justify-around items-center p-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-mono'>Voltage (V)</p>
                <p className='text-2xl font-mono'>230</p>
              </div>            
            </div>

            <div className=' border w-1/5 h-1/3 rounded-2xl shadow-lg flex justify-around items-center p-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-mono'>Temperature (K)</p>
                <p className='text-2xl font-mono'>273</p>
              </div>            
            </div>

            <div className=' border w-1/5 h-1/3 rounded-2xl shadow-lg flex justify-around items-center p-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-mono'>Pressure (pa)</p>
                <p className='text-2xl font-mono'>972</p>
              </div>            
            </div>

          </div>
        </div>

        <div className='h-1/2 flex p-10 gap-10'>
          <div className='bg-slate-100 border w-1/2 rounded-2xl shadow-lg'>
            
          </div>

          <div className='bg-slate-100 border w-1/2 rounded-2xl shadow-lg'>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
