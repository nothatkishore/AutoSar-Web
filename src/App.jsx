import React from 'react';
import speed from '../image/speedometer.png'

const App = () => {
  return (
    <>
      <div className='h-screen w-screen bg-slate-950 flex flex-col'>
        <div className='text-center p-5'>
          <p className="text-white text-4xl font-extralight">
            Predictive Maintenece of EV
          </p>
        </div>
        <div className='h-1/2 flex flex-col p-5 justify-center'>
          <div className='bg-slate-900 h-5/6 rounded-2xl p-5 flex flex-col justify-around shadow-lg'>
            <div className='flex bg-slate-800 p-4 rounded-lg shadow-lg'>
              <p className='font-light text-3xl text-gray-400'>Dashboard</p>
            </div>
            <div className='flex justify-around gap-10 items-center h-full p-2'>
              <div className='  w-1/5 h-1/2 rounded-2xl shadow-lg flex justify-around items-center bg-slate-800'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg font-mono text-gray-400'>Current (A)</p>
                  <p className='text-2xl font-mono text-gray-400'>7.00</p>
                </div>
              </div>

              <div className='  w-1/5 h-1/2 rounded-2xl shadow-lg flex justify-around items-center p-5 bg-slate-800'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg font-mono text-gray-400'>Speed (RPM)</p>
                  <p className='text-2xl font-mono text-gray-400'>1500</p>
                </div>
              </div>

              <div className='  w-1/5 h-1/2 rounded-2xl shadow-lg flex justify-around items-center p-5 bg-slate-800'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg font-mono text-gray-400'>Voltage (V)</p>
                  <p className='text-2xl font-mono text-gray-400'>230</p>
                </div>
              </div>

              <div className='  w-1/5 h-1/2 rounded-2xl shadow-lg flex justify-around items-center p-5 bg-slate-800'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg font-mono text-gray-400'>Temperature (K)</p>
                  <p className='text-2xl font-mono text-gray-400'>273</p>
                </div>
              </div>

              <div className='  w-1/5 h-1/2 rounded-2xl shadow-lg flex justify-around items-center p-5 bg-slate-800'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg font-mono text-gray-400'>Pressure (pa)</p>
                  <p className='text-2xl font-mono text-gray-400'>972</p>
                </div>
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
