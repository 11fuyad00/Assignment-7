import React from 'react';
import vectorImg from '../assets/vector1.png'

const Card = ({inProgressCount, resolvedCount}) => {
  return (
        <div className=' grid grid-cols-2 gap-10 max-w-[1200px] mx-auto my-20'>
        <div className='rounded-md p-7 text-white h-[200px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex '>
              <img 
      className="w-[250px] h-[200px]  mt-[-27px] -ml-7" 
      src={vectorImg} 
      alt="Left" 
    />
          <div>
               <h2 className='w-[150px] h-[40px] flex mt-3 justify-center text-2xl'>In-Progress</h2>
          <span className='flex  justify-center text-5xl'>{inProgressCount}</span>
          </div>
          <img 
       className="w-[250px] h-[200px] mt-[-27px] -ml-10 transform scale-x-[-1]" 
       src={vectorImg} 
       alt="Right" 
      />
        </div>
        <div className='rounded-md p-7 text-white h-[200px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex'>
              <img 
      className="w-[250px] h-[200px]  mt-[-27px] -ml-7" 
      src={vectorImg} 
      alt="Left" 
    />
          <div>
               <h2 className='w-[150px] h-[40px] flex mt-3 justify-center text-2xl'>Resolved</h2>
          <span className='flex  justify-center text-5xl'>{resolvedCount}</span>
          </div>
          <img 
       className="w-[250px] h-[200px] mt-[-27px] -ml-10 transform scale-x-[-1]" 
       src={vectorImg} 
       alt="Right" 
      />
        </div>
      </div>
  );
};

export default Card;