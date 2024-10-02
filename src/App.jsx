import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';

const App = () => {
  return (
    <>
      <div className='h-screen w-screen bg-slate-100 flex justify-center items-center'>

        <div className='bg-slate-500 w-1/2 h-full'>

          <div className='bg-red-400 h-1/2 flex flex-col justify-center items-center'>

            <div className='bg-pink-300 w-full h-1/4 p-10'>
              <h1 className='text-center text-3xl'>Title goes here</h1>
            </div>

            <div className='bg-pink-400 w-full h-3/4'>

            </div>

          </div>


          <div className='bg-red-700 h-1/2'>

          </div>

        </div>

        <div className='bg-slate-600 w-1/2 h-full'>

          <div className='bg-red-600 h-1/2 p-10 flex justify-around items-end'>
            <div className='bg-slate-200 h-1/5 w-1/5 rounded-lg shadow-2xl p-2 flex justify-center'>
                <div></div>
                <div></div>
            </div>
            <div className='bg-slate-200 h-1/5 w-1/5 rounded-lg shadow-2xl'>

            </div>
            <div className='bg-slate-200 h-1/5 w-1/5 rounded-lg shadow-2xl'>

            </div>
            <div className='bg-slate-200 h-1/5 w-1/5 rounded-lg shadow-2xl'>

            </div>
          </div>


          <div className='bg-red-800 h-1/2'>

          </div>

        </div>

      </div>
    </>
  );
};

export default App;
